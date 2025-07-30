# Tests – Cypress + TypeScript

Automated end-to-end tests for [saucedemo.com](https://www.saucedemo.com) using Cypress, TypeScript, and the Page Object Model (POM).

---

## Technologies

* Cypress – E2E test runner
* TypeScript – static typing
* Page Object Model – modular & reusable code
* Mocha + Chai – assertions & test structure

---

## Project structure

```
cypress/
├── e2e/        # Test cases grouped by feature
│   ├── login.cy.ts
│   ├── cart.cy.ts
│   ├── checkout.cy.ts
│   └── burger.cy.ts
├── pages/      # Page Object classes
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── BurgerMenu.ts
└── support/
    └── e2e.ts  # Global hooks and imports
```

---

## Test coverage

| Feature     | Test Cases |
| ----------- | ---------- |
| Login       | TC01–TC06  |
| Products    | TC07–TC16  |
| Cart        | TC17–TC22  |
| Checkout    | TC23–TC29  |
| Burger Menu | TC30–TC35  |

---

## Run tests

* **Open interactive GUI:**

  ```bash
  npx cypress open
  ```

* **Run headless in Chrome:**

  ```bash
  npx cypress run --browser chrome
  ```

* **Generate HTML report (Mochawesome):**

  ```bash
  npm run report
  ```

  Report available at `cypress/reports/index.html`

---

## CI/CD Pipeline

Configured with a GitHub Actions workflow that automatically runs on each push and pull request. The pipeline:

* Installs project dependencies via `npm ci`
* Executes Cypress tests headlessly
* Archives screenshots, videos, and HTML reports when tests fail

You can find the workflow in `.github/workflows/cypress.yml`.

---

## Framework limitations

While Cypress is a powerful tool for web E2E testing, be aware of its limitations:

* **Single-threaded execution:** Tests run sequentially in a single browser instance per spec file; no native parallel threading.
* **Browser-only testing:** Supports web applications only — no native mobile app automation (only simulates mobile viewports).
* **No multi-tab or multiple domain workflows:** Cypress runs in one origin at a time; cross-domain workflows require workarounds.
