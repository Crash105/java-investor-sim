# Title: (2) Paginated Transaction History

### Description:
Users should be able to view their complete transaction history in a **paginated** format. Each transaction will display the **date**, **type** (investment success, failure, balance change, refresh cost), and **amount**. Users can also sort or filter the transactions.

### Tasks:
1. **Implement a paginated transaction history page**:
   - Display the user’s transaction history with pagination, showing a limited number of transactions per page (e.g., 10-20 transactions).

2. **Display relevant transaction details**:
   - Each transaction should show the **date**, **type** (e.g., investment success/failure, refresh cost), and **amount**.

3. **Add navigation between pages**:
   - Allow users to navigate between pages of transactions, displaying a limited number per page.

4. **Add sorting and filters**:
   - Provide options to **sort** transactions by date, amount, or type and **filter** to show only certain transaction types (e.g., investments only, balance changes only).

### Acceptance Criteria:
- Users can view their transaction history in a paginated format.
- Transactions display relevant details such as date, type, and amount.
- Sorting and filtering options are available.

### References:
- [Spring Boot Pagination with JPA](https://www.baeldung.com/spring-data-jpa-pagination-sorting)
