const fs = require('fs');
const path = require('path');

// Get environment variables
const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;

// Path to the root README.md
const readmePath = path.join(__dirname, '../../README.md');

// Function to fetch all issues with [checkpoint- in their title
const fetchCheckpointIssues = async () => {
  try {
    const query = `repo:${repo} in:title "[checkpoint-"`;
    const response = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=100`, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch issues: ${response.status}`);
    }

    const data = await response.json();
    return data.items; // Return the list of issues
  } catch (error) {
    console.error('Error fetching issues:', error);
    return [];
  }
};

// Function to organize issues by checkpoint number
const organizeIssuesByCheckpoint = (issues) => {
  const checkpoints = {};

  issues.forEach(issue => {
    const match = issue.title.match(/\[checkpoint-(\d+)\]/);
    if (match) {
      const checkpointNum = `checkpoint-${match[1]}`;
      if (!checkpoints[checkpointNum]) {
        checkpoints[checkpointNum] = [];
      }
      checkpoints[checkpointNum].push(issue);
    }
  });

  return checkpoints;
};

// Function to sort checkpoints numerically
const sortCheckpoints = (a, b) => {
  const aNum = parseInt(a.replace('checkpoint-', ''), 10);
  const bNum = parseInt(b.replace('checkpoint-', ''), 10);
  return aNum - bNum;
};

// Function to convert checkpoint to Title Case
const titleCaseCheckpoint = (checkpoint) => {
  return checkpoint.replace(/checkpoint-(\d+)/i, (_, num) => `Checkpoint ${num}`);
};

// Function to generate the checkpoint section content with links to the issues
const generateCheckpointContent = (checkpoint, issues) => {
  const issueList = issues.map(issue => {
    const isCompleted = issue.state === 'closed';
    const date = isCompleted ? new Date(issue.closed_at).toLocaleDateString() : 'TBD';
    const issueTitleWithoutCheckpoint = issue.title.replace(/\[checkpoint-\d+\]\s*/, '');  // Remove the "[checkpoint-#]" part
    return `- [${isCompleted ? 'x' : ' '}] [${issueTitleWithoutCheckpoint}](${issue.html_url}) (Completed: ${date})`;
  }).join('\n');

  return `
### ${titleCaseCheckpoint(checkpoint)}

${issueList}
`;
};

// Function to update the README with all checkpoints
const updateReadme = async (checkpoints) => {
  // Check if the README.md file exists in the root directory
  if (!fs.existsSync(readmePath)) {
    throw new Error(`README.md not found at path: ${readmePath}`);
  }

  // Read the current README.md content
  let readmeContent = fs.readFileSync(readmePath, 'utf-8');

  // Rebuild the checkpoint sections
  const sortedCheckpointKeys = Object.keys(checkpoints).sort(sortCheckpoints);
  const newCheckpointSections = sortedCheckpointKeys.map(checkpoint => generateCheckpointContent(checkpoint, checkpoints[checkpoint])).join('\n');

  // Prepare the new checkpoint section with a single "Checkpoint Progress" heading
  const newCheckpointSection = `
  
<!-- completion list start -->

${newCheckpointSections}

<!-- completion list end -->
`;

  // Replace the old content between special comments with the new section
  const updatedReadmeContent = readmeContent.replace(/<!-- completion list start -->[\s\S]*<!-- completion list end -->/, newCheckpointSection.trim());

  // Write the updated content back to the README.md file
  fs.writeFileSync(readmePath, updatedReadmeContent, 'utf-8');
  console.log('README.md updated successfully with checkpoint sections!');
};

// Main function to fetch issues and update the README
const main = async () => {
  try {
    const issues = await fetchCheckpointIssues();
    const checkpoints = organizeIssuesByCheckpoint(issues);
    await updateReadme(checkpoints);
  } catch (error) {
    console.error('Error updating README:', error);
  }
};

main();
