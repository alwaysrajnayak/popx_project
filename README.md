# PopX Account App

This is a simple React application that allows users to **sign up**, **sign in**, and manage their account information. It uses **localStorage** to store user data like name and email, and is styled with **Tailwind CSS**.

---

## Features

- **Sign Up**: Create an account with your name, email, and password.
- **Sign In**: Log in with your credentials.
- **Account Page**: View your stored name and email.
- **localStorage**: Stores user data locally.
- **Tailwind CSS**: For beautiful, responsive UI.

---

## Tech Stack

- **React** (frontend)
- **Tailwind CSS** (styling)
- **localStorage** (data persistence)
- **React Router** (navigation)
- **Vercel** (deployment)

---

## 📂 Folder Structure

src/
│
├── components/
│ ├── Account.jsx
│ ├── SignIn.jsx
│ ├── SignUp.jsx
│ └── Welcome.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

- components/: Contains all the reusable React components.

- App.jsx: Main application file that handles routing and layout.

- App.css: Global styles (if any) alongside Tailwind CSS.

- index.css: Additional styling for specific components (if required).

- main.jsx: Entry point for React rendering.

## Installation & Setup

1. Clone the repository -
   git clone <your-repo-url>
   cd <your-repo-name>

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

4. Open your browser
   http://localhost:5173

## Usage

Sign Up: Create an account by filling in the full name, email, etc.

Sign In: Log into your account.

Account: View your profile information (name, email, etc.).

Welcome: Landing page with navigation to Sign Up or Sign In.
