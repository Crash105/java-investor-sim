# Title: (3) Admin User Management Features

### Description:
Admins should be able to manage users through an admin panel. This will allow admins to search for users by their display name and update their balance. Any balance changes made by admins should be logged as a transaction in the user’s transaction history.

### Tasks:
1. **Create a search page** for admins:
   - Admins should be able to search for users by display name.

2. **Allow admins to add or subtract credits**:
   - Once a user is found, admins can update their balance by adding or subtracting credits. This should be logged as a transaction in the user’s history.

3. **Log all credit changes** in the transaction history:
   - Every balance change made by an admin must be logged in the user’s transaction history.

4. **Display search results**:
   - After searching, display the user’s profile and balance, allowing the admin to update their balance.

### Acceptance Criteria:
- Admins can search for users by display name and modify their balance.
- All changes are properly logged in the transaction history.
- Only admins can access the user management pages.

### References:
- [Spring Boot Admin Features Guide](https://www.baeldung.com/spring-boot-admin)
- [Introduction to JPA Query Methods](https://www.baeldung.com/spring-data-jpa-query)
