# Title: (1) Set Up Spring Boot Project

### Description:
In this task, you’ll set up a new Spring Boot project using **Spring Initializr**. This tool will help you quickly create a Spring Boot project with the necessary files and dependencies. You'll include important dependencies that will allow you to build a web application and work with databases later. 

Don't worry if you're new to Spring Boot—each step will guide you through the setup process!

### What is Spring Boot?
Spring Boot is a framework that helps you create Java applications easily. It takes care of many complex configurations, so you can focus on writing your application code.

### Tasks:

1. **Use Spring Initializr**:
   - Go to [Spring Initializr](https://start.spring.io/) in your web browser.
   - Fill in the details:
     - **Project**: Choose **Maven** (most common build tool for Java).
     - **Language**: Make sure **Java** is selected.
     - **Spring Boot Version**: Use the latest stable version available.
     - **Project Metadata**:
       - **Group**: This is like a package name, e.g., `com.example`.
       - **Artifact**: This is your project name, e.g., `spring-boot-app`.
     - **Dependencies**: 
       - Click "Add dependencies" and select the following:
         - **Spring Web**: To create a web application.
         - **Spring Boot DevTools**: To help with automatic reloads during development.
         - **Spring Data JPA**: For database support in future steps.
   - Click **Generate** to download the project as a zip file.

2. **Set Up the Project in Your IDE**:
   - Unzip the downloaded file.
   - Open your preferred **IDE** (e.g., **IntelliJ IDEA** or **Eclipse**).
   - **Import the project**:
     - In IntelliJ, go to `File > New > Project from Existing Sources`, and select the unzipped project folder.
     - In Eclipse, go to `File > Import > Existing Maven Projects` and select the folder.
   - The IDE will automatically detect your project and download any needed dependencies.

3. **Configure Maven/Gradle**:
   - When you import the project, your IDE will automatically configure **Maven** (or Gradle) for you.
   - If you see any error related to Maven/Gradle, try clicking on **Reload Maven** or **Refresh Gradle** in your IDE to sync the dependencies.

4. **Create a `.gitignore` file**:
   - A `.gitignore` file tells Git (version control) which files to ignore so that unnecessary or temporary files don’t get uploaded to your repository.
   - Create a `.gitignore` file in the root of your project.
   - Add the following lines to it:
     ```
     target/
     .idea/
     *.iml
     *.log
     ```
     These lines will ignore:
     - The `target` folder (where compiled files go).
     - IDE-specific files (like `.idea/` and `.iml` files).
     - Log files (often not needed in the repository).

### Acceptance Criteria:
- The project is successfully set up with the dependencies: **Spring Web**, **Spring Boot DevTools**, and **Spring Data JPA**.
- The `.gitignore` file exists and excludes unnecessary files.
- The project builds successfully without any errors when using **Maven** or **Gradle** in your IDE.

### Helpful Tips:
- **Maven vs. Gradle**: These are tools that help manage the dependencies (libraries) your project needs. If you're not sure which to use, stick with **Maven** for now since it's widely used and simpler for beginners.
- **What is a Dependency?**: Think of dependencies like tools or libraries that your project needs. For example, **Spring Web** is a library that allows your app to handle web requests.
- **What is a `.gitignore` file?**: It tells Git to ignore certain files when you're uploading your project to GitHub or another version control system. This prevents large or unnecessary files from being tracked.

