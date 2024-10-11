# Title: (1) Add Cost to Refresh Investment Options

### Description:
This task involves adding a **refresh button** to the investment page that allows users to refresh the 3 company options. However, refreshing will cost the user some of their balance (either a fixed amount or percentage-based). The cost should be deducted from their balance and logged as a transaction.

### Tasks:
1. **Implement a refresh button**:
   - Add a button to the investment page that allows users to refresh the company options.

2. **Deduct a cost from the user's balance**:
   - When a user clicks the refresh button, deduct a set cost (e.g., 10 credits or a percentage of their balance) from their balance.

3. **Log the refresh cost as a transaction**:
   - Record the refresh cost in the user’s transaction history, similar to how investment transactions are logged.

4. **Ensure users can only make one final selection**:
   - After refreshing, the user should still only be able to make one final company selection.

### Acceptance Criteria:
- The user can refresh the company options by paying a cost.
- The refresh cost is deducted from the user’s balance and logged in their transaction history.

### References:
- [Handling Spring Boot Transactions](https://www.baeldung.com/transaction-configuration-with-jpa-and-spring)
