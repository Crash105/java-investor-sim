# Title: (2) Implement Credit/Points System

### Description:
Create a credit/points system where each user has a balance. Any changes to the user's balance (such as adding or subtracting credits) should be recorded as **transaction history**. The user’s balance will be the **SUM** of all transactions, and it will be displayed on their profile page. The balance should be **cached** after calculation so it doesn’t need to be recalculated constantly.

### Tasks:
1. **Create a database table** for transaction history:
   - This table will store the amount of each transaction, when it happened (timestamp), and a description (e.g., “Added credits for purchase”).
   - Each transaction will be linked to a user.

2. **Add methods to increase or decrease a user’s balance**:
   - Instead of modifying the balance directly, every balance change (adding or subtracting credits) will be stored as a transaction in the database.

3. **Cache the SUM of transactions** as the user’s balance:
   - The user’s balance should be calculated by adding up all of their transactions. Once calculated, the **balance should be cached** (e.g., stored in memory) to avoid recalculating it every time. 
   - You can use **Spring Cache** to store the balance in memory and invalidate/update it only when new transactions occur. 

4. **Display the balance on the user’s profile page**:
   - On the user’s profile page, display their current balance (calculated from the transaction history).

### Acceptance Criteria:
- The user's balance is updated through transaction history (not directly modified).
- Transaction records are stored in the database with relevant information (amount, timestamp, description).
- The user’s profile page displays the correct balance based on the SUM of transactions.
- The balance is **cached** and recalculated only when necessary.

### References:
- [Spring Caching Guide](https://www.baeldung.com/spring-cache)
- [Introduction to JPA and Hibernate](https://www.baeldung.com/hibernate-5-jpa)
