import fs from 'fs';
import path from 'path';

// Get environment variables
const checkpoint = process.env.GITHUB_REF.replace('refs/tags/', '');
const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
const [owner, repoName] = repo.split('/');

// Increment the checkpoint number
const getNextCheckpoint = (currentCheckpoint) => {
  const checkpointNumber = parseInt(currentCheckpoint.replace('checkpoint-', ''), 10);
  return `checkpoint-${checkpointNumber + 1}`;
};

// Get the next checkpoint for issue creation
const nextCheckpoint = getNextCheckpoint(checkpoint);

// Path to the checkpoint folder
const checkpointPath = path.join('issues', nextCheckpoint);

// Ensure fetch is available (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.error('Fetch is not available in this Node.js version. Please use Node.js 18 or newer.');
  process.exit(1);
}

// Search for existing issues with the same title using the GitHub Search API
const searchExistingIssues = async (title) => {
  try {
    const query = `repo:${owner}/${repoName} in:title "${title}"`;
    const response = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to search issues: ${response.status}`);
    }

    const data = await response.json();
    return data.items.length > 0;
  } catch (error) {
    console.error('Error searching existing issues:', error);
    return false;
  }
};

const createIssues = async () => {
  if (!fs.existsSync(checkpointPath)) {
    console.log(`No issues found for ${nextCheckpoint}`);
    return;
  }

  const files = fs.readdirSync(checkpointPath);
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(checkpointPath, file), 'utf-8');
    const lines = content.split('\n');

    // Extract title and body
    const title = `[${nextCheckpoint}] ${lines[0].replace('# Title: ', '').trim()}`;
    const body = lines.slice(1).join('\n').trim();

    // Check if title and body are valid
    if (!title || !body) {
      console.log(`Skipping file ${file} due to missing title or body.`);
      continue;
    }

    // Check if the issue already exists
    const issueExists = await searchExistingIssues(title);
    if (issueExists) {
      console.log(`Issue "${title}" already exists, skipping.`);
      continue;
    }

    // Prepare the issue payload
    const issueData = {
      title,
      body
    };

    // Make a POST request to create the GitHub issue using fetch
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(issueData)
      });

      if (response.ok) {
        console.log(`Issue created successfully: ${title}`);
      } else {
        const errorResponse = await response.json();
        console.error(`Failed to create issue: ${response.status}`);
        console.error(errorResponse);
      }
    } catch (error) {
      console.error(`Error creating issue: ${error}`);
    }
  }
};

// Run the issue creation process
createIssues();
