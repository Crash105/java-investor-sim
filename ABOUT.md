
# About This Tool

This tool automates the generation and tracking of project tasks using GitHub issues based on checkpoints and dynamically updates the project's `README.md` to reflect the status of each checkpoint. The folder structure, scripts, and workflow files are designed to ensure that issues are created automatically when project milestones are reached, while also providing a clear overview of progress in the `README.md`.

## Folder Structure

The project is organized around the `issues/` directory, which contains subfolders for each checkpoint and markdown files for individual issues.

### `issues/`
This is the base folder where all the issues related to different project checkpoints are stored.

- **Checkpoint Folders**: Each checkpoint has its own folder inside the `issues/` directory. For example:
  - `checkpoint-1/`
  - `checkpoint-2/`
  - `checkpoint-3/`
  
- **Issue Files**: Each folder contains markdown files representing the issues that need to be created for that checkpoint. These files can be named however you'd like, but a convention like `issue-#.md` (e.g., `issue-1.md`) is typically followed for clarity. The contents of each markdown file describe the title and body of the GitHub issue.

### Issue Markdown Format

Each issue markdown file starts with a title and a body.

Example content of an issue markdown file (`issue-1.md`):

```
# Title: Complete Project Setup

This issue is to track the completion of the project setup, including:
- Cloning the repository.
- Setting up the environment.
- Running the project locally.
```

- **Title**: The title is extracted from the first line of the markdown file (after `# Title:`).
- **Body**: The rest of the file becomes the body of the issue.

### Checkpoint Folders and Issues Flow

1. **Creating Checkpoint Folders**: Create a folder inside the `issues/` directory for each checkpoint. Each folder should contain markdown files representing the issues that need to be generated for the next phase of the project.
   
2. **Managing Issues**: When a checkpoint tag is pushed (e.g., `checkpoint-2`), this tool will automatically generate the GitHub issues based on the markdown files inside the **next checkpoint folder** (in this case, `checkpoint-3`).

3. **Issue Generation**: The tool creates issues based on the contents of the markdown files for the next checkpoint. It ensures that duplicates are avoided by checking if an issue with the same title already exists.


## `.github/` Directory

This tool relies on GitHub Actions and custom scripts stored inside the `.github/` directory for automation.

### `.github/workflows/`

This directory contains the workflow files that trigger when a checkpoint tag is pushed. The workflow:

- **Fetches the issues** from the corresponding checkpoint folder.
- **Creates GitHub issues** using the markdown files inside the folder.
- **Updates the `README.md`** to reflect project progress and issue completion status.

### `.github/scripts/`

This directory contains the scripts that generate issues and update the `README.md`. These scripts:

1. **Generate GitHub issues** based on the contents of the markdown files.
2. **Update the `README.md`** by listing each checkpoint's progress dynamically, between the special comments `\<!-- completion list start --\>` and `\<!-- completion list end --\>`.

### Permissions

To allow GitHub Actions to run properly, ensure that:

- **`GITHUB_TOKEN`**: This is automatically provided in GitHub Actions and allows the scripts to create issues and commit updates to the repository.

- **Enable Workflow Permissions**:
  1. Go to your repository on GitHub.
  2. Click on the **Settings** tab.
  3. In the left sidebar, click on **Actions**.
  4. Under **Actions permissions**, make sure the option **Allow all actions and reusable workflows** is selected.
  
- **Enable `GITHUB_TOKEN` Write Permissions**:
  1. In the **Actions** settings, scroll down to the **Workflow permissions** section.
  2. Select the option **Read and write permissions** to allow the workflow to create issues and push commits (e.g., updating the `README.md`).
  3. Make sure to check **Allow GitHub Actions to create and approve pull requests** if needed for further automation.

- **Proper Repository Permissions**: Ensure that your repository settings allow actions to create, read, and write issues and to push commits, particularly for updating the `README.md`.


## Updating the `README.md`

The tool dynamically updates the `README.md` file to reflect project progress, inserting information between two special comments:

- **Start Comment**: `\<!-- completion list start --\>`
- **End Comment**: `\<!-- completion list end --\>`

Between these comments, the tool inserts or updates the status of each checkpoint and the issues under it.

### Example of a Dynamic Checkpoint Section in `README.md`

```markdown
### Checkpoint Progress

The following section will be dynamically updated as checkpoints are completed. Do not delete or modify the special comments as they are used to insert progress updates automatically when tags are pushed.

\<!-- completion list start --\>

### Checkpoint 1

- [x] [Complete Project Setup](https://github.com/your-repo/issues/1) (Completed: 10/11/2024)

### Checkpoint 2

- [ ] [Create REST API for Users](https://github.com/your-repo/issues/2) (Completed: TBD)
- [x] [Implement Database Connectivity](https://github.com/your-repo/issues/3) (Completed: 10/11/2024)

\<!-- completion list end --\>
```

### Customizing the `README.md`

You can customize the `README.md` with additional project details outside the special comments. However, **do not delete or modify** the comments `\<!-- completion list start --\>` and `\<!-- completion list end --\>`, as they are necessary for the tool to insert the dynamic progress updates.

## Setting Up the Project

### Step 1: Clone or Fork the Repository

- Clone or fork the repository to your local environment.

### Step 2: Add Checkpoint Folders and Issues

- For each project milestone, create a new checkpoint folder inside the `issues/` directory (e.g., `checkpoint-1/`).
- Add markdown files for each issue related to that checkpoint. You can name these markdown files as `issue-#.md`, but any valid name will work.

### Step 3: Add a Checkpoint Tag

- When you're ready to generate the issues for a checkpoint, push a tag in the format `checkpoint-#` (e.g., `checkpoint-1`).
  - Generally the first tag will be `checkpoint-0` to trigger the first set of issues.
- The tool will automatically create the GitHub issues and update the `README.md` with the progress for that checkpoint.

### Step 4: Monitor Progress

- The `README.md` will be updated with the status of each issue under the appropriate checkpoint section, showing whether issues are complete or incomplete and their completion date if available.

---

