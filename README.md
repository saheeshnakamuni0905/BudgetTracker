# BudgetTracker

A full-stack app demonstrating key React concepts including Next.js, SEO, Redux, Hooks, GraphQL, and end-to-end DevOps with Docker & Kubernetes.

## Actor

**User**

## Functions

1. **Secure Login (OAuth or JWT)**
2. **Add / Edit / Delete Budget (Transactions/Expenses)**
3. **Automatic or Manual Categorization of budgets/expenses**
4. **Visualize Spending with charts that update automatically**
5. **Set Financial Goals** (warn when going over budget)

## Must-Have Features

- **Secured login (OAuth)**
- **Basic CRUD on budgets/expenses**
- **Charts that recalculate sums** and reflect changes (red color for over-budget)
- **Budget/goal tracking**

## Nice-to-Have

- **Budget suggestions** per category
- **Dynamic visual warnings** (e.g., color changes) when exceeding category goals
- **Personal Finance Score** Calculate a “money management” score based on factors like budget adherence, spending frequency, or savings rate—giving users a quick snapshot of their financial habits.

## Architecture

This project is implemented as multiple microservices:

- **Auth Service**  
  Handles user registration, login, and user profile storage.

- **Budget Service**  
  Manages budgets, expenses (transactions), categories, and goals. References the `userID` for ownership.

## Data Model

- **User**  
  `id`, `firstName`, `lastName`, `email`, `password (encrypted)`

- **Transactions**  
  `id`, `userID`, `amount`, `date`, `categoryID`, `participantCount` (optional), `netAmount`(optional), `owedOrOwing`(optional)

- **Category**  
  `id`, `catName`

- **Budget**  
  `id`, `userID`, `amount`, `timePeriod`, `categoryID`

## License  
This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
