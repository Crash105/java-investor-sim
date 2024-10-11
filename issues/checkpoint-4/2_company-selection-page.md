# Title: (2) Company Selection Page

### Description:
On the investment page, users will be presented with 3 companies to choose from. Each company will have properties like **incubation time** (how long before a result occurs), **possible yield** (profit potential: low, medium, or high), **risk factor** (chance of failure), and **cost**. The user selects one company to invest in, and the cost is deducted from their balance.

### Tasks:
1. **Generate 3 companies** with randomized properties:
   - Each company should have random values for incubation time, yield, risk, and cost.

2. **Display the 3 companies** on the investment page:
   - The user should see the 3 companies and their properties clearly.

3. **Allow users to select one company** and deduct the cost:
   - When the user selects a company, deduct the cost of investment from their balance.

4. **Store the selected company** in the database:
   - Save the user’s choice in the database along with the company's properties, such as incubation time and risk factor.

### Acceptance Criteria:
- The user can view 3 randomized companies and make a selection.
- The selected company’s cost is deducted from the user’s balance.
- The selection is stored in the database for future reference.

### References:
- [Spring MVC for Web Development](https://www.baeldung.com/spring-mvc-tutorial)
- [Guide to JPA Entities](https://www.baeldung.com/jpa-entities)
