# Title: (4) Logic for Yield and Profit

### Description:
After the **incubation time** for an investment has passed, the app will determine whether the user’s investment was successful or not. This will depend on the company's **risk factor**. If the investment succeeds, the user earns a profit (yield), and if it fails, the user loses the invested amount.

### Tasks:
1. **Store the user’s selection and incubation time** in the database:
   - When the user selects a company to invest in, store the incubation time and other details in the database.

2. **Determine success or failure** after the incubation period:
   - After the incubation time has passed, use the company’s **risk factor** to calculate whether the investment succeeds or fails.

3. **Apply the yield or record the loss**:
   - If the investment succeeds, add the yield to the user’s balance. If it fails, deduct the cost from the user’s balance.

4. **Update the balance and transaction history**:
   - Whether the investment succeeds or fails, log the outcome in the user’s transaction history and update their balance.

### Acceptance Criteria:
- Investment outcomes (success or failure) are calculated based on the company’s risk factor.
- The user’s balance is updated correctly after the incubation period.
- Transaction history is logged correctly in the database.

### References:
- [Random Numbers and Probability in Java](https://www.baeldung.com/java-generating-random-numbers)
- [JPA Transaction Management](https://www.baeldung.com/spring-data-jpa-transaction)
