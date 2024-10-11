# Title: (1) Integrate Google OAuth for Authentication

### Description:
In this task, you’ll add **Google OAuth** to allow users to log into your Spring Boot application using their Google accounts. We’ll use **Spring Security** to handle the OAuth process and guide you through setting up credentials in the **Google Developer Console**.

If you’re new to OAuth, don’t worry—this task will walk you through the steps to set up Google as an authentication provider for your app.

### What is OAuth?
**OAuth** is a way to let users log in to your app using their existing accounts (like Google) without sharing their passwords. It’s more secure and easier for users since they can log in with just a few clicks.

### Tasks:

1. **Set up a Google Developer Console project**:
   - Go to the [Google Developer Console](https://console.developers.google.com/).
   - Click **Create Project** and give it a name.
   - In the dashboard, click **Enable APIs and Services** and search for **Google Sign-In API**.
   - Click **Enable** to activate the Google Sign-In API for your project.

2. **Create OAuth credentials (Client ID and Client Secret)**:
   - In the Google Developer Console, go to the **Credentials** section.
   - Click **Create Credentials** and select **OAuth 2.0 Client ID**.
   - You will be asked to configure the **OAuth consent screen**. Add your app name, email, and any other necessary details.
   - After saving, create a **Web application** under the OAuth 2.0 Client ID.
   - Add `http://localhost:8080/login/oauth2/code/google` as an **Authorized redirect URI**.
   - After creating the credentials, note down the **Client ID** and **Client Secret**. You’ll need these for the next steps.

3. **Add Spring Security and OAuth dependencies**:
   - Open your `pom.xml` (if using Maven) or `build.gradle` (if using Gradle) and add the following dependencies:
     ```xml
     <!-- Spring Security and OAuth dependencies -->
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-oauth2-client</artifactId>
     </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-security</artifactId>
     </dependency>
     ```
   - Run **Maven** or **Gradle** to refresh your project and download the dependencies.

4. **Configure Spring Security for Google OAuth login**:
   - Open your `application.properties` (or `application.yml`) file and add the following configuration to integrate Google OAuth:
     ```properties
     spring.security.oauth2.client.registration.google.client-id=<your-client-id>
     spring.security.oauth2.client.registration.google.client-secret=<your-client-secret>
     spring.security.oauth2.client.registration.google.scope=profile,email
     spring.security.oauth2.client.registration.google.redirect-uri=http://localhost:8080/login/oauth2/code/google
     ```
   - Replace `<your-client-id>` and `<your-client-secret>` with the credentials you got from the Google Developer Console.

5. **Test the login and logout functionality**:
   - Run your Spring Boot application.
   - Go to `http://localhost:8080/login` in your browser. You should see a **Login with Google** option.
   - Click the button and log in with your Google account. If successful, you will be redirected to the application, and your basic profile information (like your name and email) will be retrieved.

### Acceptance Criteria:
- Users can successfully log in to the application using their Google accounts.
- After login, the app retrieves the user's public profile data (name, email, etc.).
- The application redirects users properly after login and logout.
- **References**: [Google OAuth Spring Boot Guide](https://www.baeldung.com/spring-security-5-oauth2-login), [Google OAuth Developer Setup](https://developers.google.com/identity/sign-in/web/sign-in)

### Tips for Beginners:
- **What are OAuth credentials?**: The **Client ID** and **Client Secret** are like a username and password for your app to communicate with Google. They let Google know your app is allowed to use their login service.
- **Redirect URI**: This is the URL Google sends users back to after they successfully log in. It must match what you configure in both Google Developer Console and your Spring Boot app.
- **Testing locally**: Make sure your Spring Boot app is running on `localhost:8080` to match the redirect URI.
