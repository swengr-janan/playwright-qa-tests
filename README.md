```markdown
# 🚀 Playwright Login Test Automation

This project demonstrates automated login tests using [Playwright](https://playwright.dev/), with a structured approach using **fixtures**, **Page Object Model (POM)**, and **test data-driven testing**.

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- Git (optional but useful)

Check versions:

```bash
node -v
npm -v
````

---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/playwright-login-test.git
cd playwright-login-test
```

2. **Initialize the project**

If `package.json` doesn’t exist yet:

```bash
npm init -y
```

3. **Install Playwright**

```bash
npm install -D @playwright/test
npx playwright install
```

4. **(Optional) Add scripts to `package.json`**

```json
"scripts": {
  "test": "npx playwright test",
  "test:ui": "npx playwright test --ui"
}
```

---

## 🧪 Running the Tests

Run all tests:

```bash
npx playwright test
```

Run in interactive UI mode:

```bash
npx playwright test --ui
```

Run specific test file:

```bash
npx playwright test tests/login.spec.ts
```

---

## ✅ What’s Covered

* 🔁 **Data-driven testing** using arrays of test credentials
* 🔒 **Login page automation** with assertions for invalid credentials
* 🧱 **Fixtures** for reusable page objects
* 🧼 Clean project structure for scalability

## 🧑‍💻 Author

John Anthony Balbin
---

Happy testing! 🧪✨

```

---

Let me know if you want this exported to a `.md` file or want to include `.env` handling or valid login testing as the next step!
```
