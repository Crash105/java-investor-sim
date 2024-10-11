
# Setting Up Variant and Original Remotes

This guide will help you set up your project so you can maintain a connection to the original repository (referred to as `template`) while also pushing and maintaining changes to your own variant repository.

## Step 1: Clone the Original Repository Locally

First, you will need to clone the original repository to your local machine. This will allow you to work with the original codebase as a starting point.

```bash
git clone https://github.com/MattToegel/project-guide-template.git
```

## Step 2: Rename the Local Directory (Optional)

You may want to rename the local directory to better reflect the new project name.

```bash
mv project-guide-template NEW_REPOSITORY
```

This step is optional but helps keep things organized.

## Step 3: Add Your Variant Repository as the `origin` Remote

Now, create a new repository on GitHub for your variant project. After that, set the remote `origin` to point to your variant repository.

1. Create the new repository on GitHub (e.g., `NEW_REPOSITORY`).
2. In the local project directory, update the remote `origin`:

```bash
cd NEW_REPOSITORY
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPOSITORY.git
```

This will allow you to push your changes to your variant repository.

## Step 4: Add the Original Repository as the `template` Remote

To ensure you can continue receiving updates from the original repository, you need to add it as a new remote called `template`:

```bash
git remote add template https://github.com/MattToegel/project-guide-template.git
```

Now, you have two remotes:

- `origin`: Your variant repository where you'll push your changes.
- `template`: The original repository where you'll pull updates.

## Step 5: Verify the Remote Setup

To verify that you have correctly set up your remotes, run the following command:

```bash
git remote -v
```

You should see something like this:

```bash
origin    https://github.com/YOUR_USERNAME/NEW_REPOSITORY.git (fetch)
origin    https://github.com/YOUR_USERNAME/NEW_REPOSITORY.git (push)
template  https://github.com/MattToegel/project-guide-template.git (fetch)
template  https://github.com/MattToegel/project-guide-template.git (push)
```

## Step 6: Pull Updates from the Original (`template`) Repository

When the original repository (now `template`) receives updates, you can pull them into your local variant by following these steps:

1. **Fetch changes from `template`**:

```bash
git fetch template
```

2. **Merge changes from the `template` remote into your local branch** (e.g., `main`):

```bash
git merge template/main
```

This will merge the latest changes from the original repository into your local variant. If there are any merge conflicts, you will need to resolve them manually.

## Step 7: Push Updates to Your Variant Repository (`origin`)

After merging changes from the original repository, or after making your own changes, you can push your updated code to your variant repository:

```bash
git push origin main
```

This will push your local changes to your variant repository on GitHub.

## Workflow Summary

- **Pull from original (`template`)**: Use `git fetch template` and `git merge template/main` to pull and merge changes from the original repository.
- **Push to your variant (`origin`)**: Use `git push origin main` to push changes to your own variant repository.
