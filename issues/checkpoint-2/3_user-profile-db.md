# Title: (3) Store User Profile in Database

### Description:
In this task, you will store user profiles in the database when they log in using Google OAuth. If the user is logging in for the first time, their profile will be created in the database. For future logins, their profile information will be retrieved from the database.

You will set up **JawsDB** for Heroku or use a **local database** for GCE. This will help you store and manage user data like Google ID, name, and email.

### Tasks:

1. **Set up JawsDB on Heroku or a Local Database on GCE**:
   - If you're deploying to **Heroku**, set up **JawsDB** by following this guide: [JawsDB Setup on Heroku](https://elements.heroku.com/addons/jawsdb).
     - Go to the **Resources** tab of your Heroku app, search for **JawsDB**, and add it.
     - This will give you a MySQL database where you can store user profiles.
   - If you're using **GCE**, you can set up a local MySQL or PostgreSQL database. Follow this guide for setup: [Google Cloud SQL Setup](https://cloud.google.com/sql/docs).

2. **Check if the User Profile Exists in the Database Upon Login**:
   - When a user logs in, your app should check if their profile already exists in the database.
   - To do this, write a query that looks for the user’s **Google ID** in the database. If the ID is found, the app can use the existing profile.
   - Example (using Spring Data JPA):
     ```java
     @Repository
     public interface UserRepository extends JpaRepository<User, Long> {
         Optional<User> findByGoogleId(String googleId);
     }
     ```

3. **Create a New User Profile if It Doesn’t Exist**:
   - If the user is logging in for the first time (i.e., their profile doesn’t exist in the database), create a new entry for them.
   - Store information such as the user’s **Google ID**, **name**, and **email** in the database.
   - Example (using Spring Data JPA):
     ```java
     @Entity
     public class User {
         @Id
         @GeneratedValue(strategy = GenerationType.IDENTITY)
         private Long id;
         private String googleId;
         private String name;
         private String email;
         // Getters and setters
     }
     ```

4. **Ensure Future Logins Retrieve the Profile from the Database**:
   - For future logins, make sure the app retrieves the user profile from the database using their **Google ID**.
   - If the profile is found, load the user’s information from the database into the session.

### Acceptance Criteria:
- User profiles are stored in the database when users log in.
- If a user profile already exists, it is retrieved from the database upon login.
- The database is properly set up and functional (using **JawsDB** on Heroku or a local database on GCE).

### Tips for Beginners:
- **What is JawsDB?**: It’s a database service available on Heroku that provides a MySQL database to store your app's data.
- **Spring Data JPA**: This is a tool in Spring Boot that makes it easier to interact with the database. You can use it to run queries and save data without writing a lot of code.
- **Entity**: An entity is a class that maps to a table in the database. In this case, the `User` entity represents the `users` table in the database.

### References:
- [Spring Boot Database Integration Guide](https://www.baeldung.com/spring-boot-data-sql-and-nosql)
- [JawsDB Setup on Heroku](https://elements.heroku.com/addons/jawsdb)
- [Google Cloud SQL Setup](https://cloud.google.com/sql/docs)
