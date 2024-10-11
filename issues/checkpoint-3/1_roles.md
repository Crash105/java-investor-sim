# Title: (1) Role-Based Access Control (Admin)

### Description:
In this task, you will introduce **roles** in the application: `admin` and `regular user`. Admins should have access to specific pages that regular users can’t access (like user management pages). This will ensure that only authorized users can access certain features.

### Tasks:
1. **Add a `role` field** to the user model:
   - Each user should have a `role` field that specifies whether they are an `admin` or a `regular user`.

2. **Implement role-based security** using Spring Security:
   - Use Spring Security to control access to specific pages or features based on the user’s role.
   - Admins should have access to certain restricted pages, while regular users should be denied access to these pages.

3. **Create restricted admin pages**:
   - Create pages that only admins can access (e.g., user management or transaction logs).

4. **Test role-based access**:
   - Ensure that regular users can’t access admin pages, and admins can navigate to their special pages.

### Acceptance Criteria:
- Users have either an `admin` or `regular` role.
- Admins have access to special pages, and regular users are restricted from accessing admin pages.
- Security rules are correctly implemented and tested.

### References:
- [Spring Security Role-Based Access Control](https://www.baeldung.com/role-and-privilege-for-spring-security-registration)
- [Introduction to Spring Security](https://spring.io/guides/gs/securing-web/)
