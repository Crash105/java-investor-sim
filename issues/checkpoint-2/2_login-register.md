# Title: (2) Implement Basic Registration/Login Flow

### Description:
In this task, you will create a basic login and logout flow using **Google OAuth**. This allows users to log in to your application using their Google accounts. You'll also implement a logout function that ends the user's session and redirects them back to the homepage.

### What is OAuth?
OAuth allows users to sign in to your app using their Google account without needing a separate username and password. It’s secure and widely used.

### Tasks:

1. **Implement Login Route**:
   - Make sure there is a **Login** button on your homepage that directs users to the Google OAuth login page.
   - Once users successfully log in, redirect them to a success page (e.g., `/dashboard`) or back to the homepage.
   - To implement the login functionality, you should use **Spring Security’s** built-in Google OAuth integration.

2. **Retrieve User Information After Login**:
   - When users log in using Google, Google will share basic information like the user’s **name** and **email**.
   - This information is stored in the user’s session and can be accessed by using **Spring Security’s `Principal` object**.
   - Example code to retrieve user information:
     ```java
     @GetMapping("/dashboard")
     public String getUserInfo(Model model, Principal principal) {
         OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) principal;
         Map<String, Object> userAttributes = authToken.getPrincipal().getAttributes();
         // You can access user info here
         model.addAttribute("name", userAttributes.get("name"));
         model.addAttribute("email", userAttributes.get("email"));
         return "dashboard";
     }
     ```

3. **Implement Logout Functionality**:
   - Spring Security provides built-in logout functionality, which will invalidate the user’s session.
   - Add a **Logout** button that points to `/logout`, which will log the user out and redirect them to the homepage or login page.
   - You can customize this in `application.properties`:
     ```properties
     spring.security.oauth2.client.logout-url=/logout
     ```
   - You can also redirect users to a specific page after logout:
     ```properties
     spring.security.logout.success-url=/
     ```

4. **Test the Login/Logout Flow**:
   - Run your Spring Boot application and visit the homepage.
   - Click the **Login** button and verify that you are redirected to Google for authentication.
   - After logging in, ensure that you are redirected to the correct page (e.g., `/dashboard`).
   - Test the **Logout** button to make sure the session ends and that the user is redirected back to the homepage.

### Acceptance Criteria:
- Users can log in using their Google accounts.
- After logging in, users are redirected to a dashboard or success page.
- Users can log out, which invalidates their session and redirects them to the homepage.
- The login and logout process should be smooth, without errors.

### Tips for Beginners:
- **Session**: This stores information about the user while they are logged into your app. Once they log out, the session is destroyed.
- **Principal**: This is an object that holds the logged-in user's information, such as their name and email.
- **Login/Logout**: These routes are managed by **Spring Security**, so you don’t need to create them from scratch.

### References:
- [Spring Boot OAuth Login Guide](https://www.baeldung.com/spring-security-5-oauth2-login)
