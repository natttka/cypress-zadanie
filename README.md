# Saucedemo E2E Tests – Cypress + TypeScript

Automated end-to-end tests for [saucedemo.com](https://www.saucedemo.com)  
using **Cypress**, **TypeScript**, and the **Page Object Model (POM)**.

---

## Technologies

- ✅ Cypress – E2E test runner
- ✅ TypeScript – static typing
- ✅ Page Object Model – modular & reusable code
- ✅ Mocha + Chai – assertions & structure

---

## Project structure

cypress/
├── e2e/ # Test cases grouped by feature
│ ├── login.cy.ts
│ ├── cart.cy.ts
│ ├── checkout.cy.ts
│ └── burger.cy.ts
├── pages/ # Page Object classes
│ ├── LoginPage.ts
│ ├── ProductsPage.ts
│ ├── CartPage.ts
│ ├── CheckoutPage.ts
│ └── BurgerMenu.ts
└── support/
└── e2e.ts # Global hooks and imports

## Test coverage

| Feature     | Test Cases |
| ----------- | ---------- |
| Login       | TC01–TC06  |
| Products    | TC07–TC16  |
| Cart        | TC17–TC22  |
| Checkout    | TC23–TC29  |
| Burger Menu | TC30–TC35  |

## Run tests

Open GUI:
npx cypress open

Run headless in chrome:
npx cypress run --browser chrome

