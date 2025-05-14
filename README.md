# 🚀 Ad Performance Summary

This project involves developing a comprehensive dashboard to monitor and track ad performance effectively.

## ✅ How to Run the Project

### ⚡ Running the Web Application

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at **[http://localhost:3000](http://localhost:3000)**.

### 🛠️ Running the Data Server

1. **Start JSON Server:**

   ```bash
   npm run json-server
   ```

   The data server will be available at **[http://localhost:8000](http://localhost:8000)**.

---

## 🚨 Attention - Commit Rules

Follow these commit message conventions:

- `feat:` For creating new features.
- `chore:` For minor changes or maintenance tasks.
- `fix:` For bug fixes or code corrections.
- `refactor:` For code structure improvements without changing functionality.
- `docs:` For updating or adding documentation.
- `test:` For adding or updating tests.
- `style:` For formatting, indentation, etc. (no code change).
- `perf:` For performance improvements.
- `revert:` For reverting previous commits.

Example:

```
git commit -m "feat: Ad Performance Summary"
```

---

## 🔧 Husky Configuration

This project uses **Husky** to enforce coding standards. Please follow these rules:

- Maximum allowed warnings: **10**
- Linting is enforced before each commit.

---

## 🧹 ESLint Configuration

1. Install the **ESLint extension** in your code editor to maintain consistent code quality.
2. ESLint will run automatically on each commit via Husky.

---

## 🛠️ Additional Commands

- **Run Linter:**

  ```bash
  npm run lint
  ```

- **Format Code:**

  ```bash
  npm run format
  ```

- **Run Tests:**

  ```bash
  npm run test
  ```

---

## 🌐 Environment Variables

Ensure that you have a `.env` file with the following variables:

```
NEXT_PUBLIC_SECRET_KEY=YOUR_SECRET
```

## ✅ Author

- [Fraza Aditya Wiguna](https://github.com/FrazaAdityaWiguna)

Feel free to reach out for any questions or suggestions!
