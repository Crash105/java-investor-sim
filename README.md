
# Investment Management Web Application

**Author**: [Your Name Here]

[Link to the original repository](https://github.com/MattToegel/project-guide-template)

## Project Overview

This project is designed to build an **Investment Management Web Application** using **Spring Boot**. It features **user authentication** through Google OAuth, a **credits/points system**, and an **investment simulation** where users can invest in randomly generated companies with varying risks and rewards. The project allows users to track their investments, view transaction history, and analyze their decision-making performance over time.

Key functionalities include:
- **User Profiles**: Users can log in via Google, with their profiles and investment history stored in a database.
- **Admin Features**: Admins can manage user balances and access restricted features.
- **Investment System**: Users invest in fake companies with incubation times and yields, and their decisions are logged for future analytics.
- **Real-time Feedback**: Users can see leaderboards, transaction history, and investment performance metrics.
- **Deployable on Heroku or GCE**: The project can be easily deployed to Heroku or Google Compute Engine, making it scalable and production-ready.

Each checkpoint tag pushes a new set of tasks (issues) and updates the project's progress in this `README.md` file automatically via GitHub Actions.


## Getting Started

To get started with the project, follow these steps to set up the repository, fork it, and configure it for automatic issue generation and progress tracking.

### 1. Fork the Repository

First, fork the original repository by clicking the "Fork" button on the top right corner of the GitHub page or using this link:

[Link to fork the repository](https://github.com/MattToegel/project-guide-template/fork)

### 2. Clone Your Forked Repository Locally

```bash
# Clone your forked repository to your local machine
git clone https://github.com/your-username/your-forked-repo.git
cd your-forked-repo
```

### 3. Set Up Workflow Permissions for GitHub Actions

To allow the GitHub Actions workflow to manage issues and update the `README.md` file automatically, follow these steps:

1. Go to **Settings** > **Actions** > **General** in your forked repository.
2. Scroll to the **Workflow permissions** section.
3. Select **Read and write permissions**.
4. Check the box for **Allow GitHub Actions to create and approve pull requests**.
5. Click **Save**.

### 4. Update Author Name

In the root of the repository, update this `README.md` file to reflect your name as the project author.

Replace:

```markdown
**Author**: [Your Name Here]
```

With your name:

```markdown
**Author**: Your Name
```

### 5. Persist Changes and Push

After updating the author name, persist your changes locally and push them back to GitHub:

```bash
# Stage your changes
git add README.md

# Commit your changes
git commit -m "Update README with author name"

# Push your changes to GitHub
git push origin main
```

### 6. Create the First Tag to Get Started

To start the project and initialize the workflow, create the first tag `checkpoint-0`:

```bash
# Create the initial tag for checkpoint-0
git tag checkpoint-0

# Push the tag to GitHub
git push origin checkpoint-0
```

Once this tag is pushed, the GitHub Action will automatically generate the first set of issues and update the `README.md` with the completion progress.

As you progress, each time you finish a set of issues of a given checkpoint, repeat the above steps with the current checkpoint number to progress through the project.

**Note:** This process takes about 30 seconds or so to complete.

---

## Checkpoint Progress

The following section will be dynamically updated as checkpoints are completed. **Do not delete or modify the special comments** as they are used to insert progress updates automatically when tags are pushed.

<!-- completion list start -->


<!-- completion list end -->




---


