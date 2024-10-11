# Title: (3) Add Scoreboards for Top 10 Investors

### Description:
This feature allows you to create **scoreboards** that display the top 10 investors, ranked by their balance changes (profits and losses) from investments. The scoreboards will be categorized into **daily, weekly, monthly**, and **all-time** rankings, showing metrics like the user’s balance delta and success/failure rate for investments.

### Tasks:
1. **Implement scoreboards with categories**:
   - Create tabs for **daily, weekly, monthly**, and **all-time** leaderboards.

2. **Calculate balance deltas**:
   - For each user, calculate their balance delta (the difference between their starting balance and their current balance) based on investment outcomes.

3. **Display top 10 users**:
   - Show the top 10 users in each category, displaying their **username**, **total balance delta**, and **number of successful/failed investments**.

### Acceptance Criteria:
- Scoreboards display the top 10 users for each category (daily, weekly, monthly, all-time).
- Metrics such as balance delta and success/failure count are shown for each user.

### References:
- [Spring Boot Pagination and Sorting](https://www.baeldung.com/spring-data-jpa-pagination-sorting)
