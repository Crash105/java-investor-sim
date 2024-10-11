# Title: (4) Update Navigation Bar with Role-Based Content

### Description:
Update the navigation bar to show different options for users based on their role. For example, admins should see links to admin pages, while regular users will not see these links. Also, the user’s balance should always be displayed in the navigation bar, and it should update in real-time as transactions occur.

### Tasks:
1. **Modify the navigation bar** to conditionally display admin links:
   - Use the user’s role to show different options in the navigation bar. For admins, show links to admin-specific pages.

2. **Display the user’s balance** in the navigation bar:
   - The current balance should always be visible in the navigation bar, regardless of the user’s role.

3. **Ensure the balance updates in real time**:
   - When a new transaction occurs, the balance displayed in the navigation bar should update without needing a page refresh.

### Acceptance Criteria:
- The navigation bar shows admin links only for users with the admin role.
- The user’s balance is always displayed in the navigation bar.
- The balance updates correctly as transactions are logged.

### References:
- [Dynamic Menu Based on User Roles](https://www.baeldung.com/spring-security-role-based-menu)
- [Spring Boot Thymeleaf Integration for Dynamic Content](https://spring.io/guides/gs/serving-web-content/)
