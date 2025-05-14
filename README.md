# ✅ Vikunja API Tests with Playwright

This project is a lightweight API test framework built with [Playwright](https://playwright.dev) to validate core functionality of the [Vikunja](https://vikunja.io) open-source task management API. Public instance is used for testing purposes (https://try.vikunja.io)

---

## 📌 What’s Tested

| Endpoint               | Purpose                      |
|------------------------|------------------------------|
| `POST /api/v1/register` | User registration with valid data |
| `POST /api/v1/register` | User registration with the existing user name |
| `POST /api/v1/register` | User registration with the existing e-mail |
| `POST /api/v1/login   ` | User login with valid credentials |
| `PUT /api/v1/projects ` | Creating a new project as a logged in user |

> ✅ Additional test cases (Login, Tasks, Projects, etc.) will be added later.

---

## 📁 Project Structure

vikunja-api-tests/

├── tests/

│ └── testSuite.spec.ts # Contains the registration test 

├── playwright.config.ts # Playwright test config 

├── package.json 

└── README.md



---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/vikunja-api-tests.git

cd vikunja-api-tests

npm install

npx playwright test


⚙️ Tech Stack

Playwright

TypeScript

REST API

Node.js


⚠️ Important Note on Accessibility

If while testing the public Vikunja instance (https://try.vikunja.io) you encounter errors or blocked access:

Please, temporarily disable antivirus real-time web protection
