# CCK – Cooking & Kitchen Product Store Web Application

## Overview

CCK is a full-stack MERN-based web application designed for showcasing and managing cooking and kitchen-related products. The project demonstrates modern web development practices using React, Node.js, Express.js, and MongoDB.

The application includes:

- User Authentication
- Protected Routes
- Product Management
- Contact System
- Responsive UI Design
- REST API Integration

---

# Project Structure

```text
CCK-main/
│
├── front/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── about/
│   │   ├── components/
│   │   ├── contact/
│   │   ├── context/
│   │   ├── home/
│   │   ├── products/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── back/                      # Express Backend
│   ├── controller/
│   ├── model/
│   ├── models/
│   ├── route/
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Features

## Frontend Features

- Responsive React UI
- React Router Navigation
- Authentication System
- Protected Product Routes
- Toast Notifications
- Context API State Management
- Tailwind CSS Styling
- DaisyUI Components

## Backend Features

- RESTful API with Express.js
- MongoDB Database Integration
- User Registration & Login
- Password Hashing with bcryptjs
- Contact API Handling
- Environment Variable Configuration
- CORS Support

---

# Tech Stack

## Frontend

- React 18
- Vite
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS
- DaisyUI

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- cors

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Neloy4321/CCK.git
cd CCK
```

---

# Backend Setup

## Navigate to Backend Folder

```bash
cd back
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file inside the `back` directory.

```env
PORT=4000
MongoDBURI=your_mongodb_connection_string
```

## Start Backend Server

```bash
npm start
```

Backend Server:

```text
http://localhost:4000
```

---

# Frontend Setup

## Navigate to Frontend Folder

```bash
cd front
```

## Install Dependencies

```bash
npm install
```

## Start Frontend Development Server

```bash
npm run dev
```

Frontend Server:

```text
http://localhost:5173
```

---

# API Endpoints

## User Routes

```text
POST /user/signup
POST /user/login
```

## Product Routes

```text
GET /cook
```

## Contact Routes

```text
POST /api/contact
```

---

# Authentication Workflow

1. User creates an account.
2. Password is hashed using bcryptjs.
3. User logs into the system.
4. Authentication state is maintained using React Context API.
5. Protected routes become accessible after successful login.

---

# Frontend Routes

| Route | Description |
|---|---|
| `/` | Home Page |
| `/product` | Product Page |
| `/signup` | Registration Page |
| `/contact` | Contact Page |
| `/about` | About Page |

---

# Database Collections

The application uses MongoDB collections for:

- Users
- Cooking Products
- Kitchen Products
- Contact Messages

Mongoose is used for schema modeling and database operations.

---

# Security Features

- Password Encryption using bcryptjs
- Environment Variable Protection
- CORS Middleware
- Protected Frontend Routing

---

# Future Improvements

Potential future enhancements include:

- JWT Authentication
- Admin Dashboard
- Shopping Cart System
- Payment Gateway Integration
- Product Search & Filtering
- Role-Based Access Control
- Docker Deployment
- CI/CD Integration
- Cloud Hosting

---

# Development Commands

## Backend

```bash
npm start
```

## Frontend

```bash
npm run dev
npm run build
npm run preview
```

---

# Author

## Neloy Pramanik Supto

- CSE Student
- AI & ML Research Enthusiast
- MERN Stack Developer
- Networking & Automation Enthusiast

---

# License

This project is licensed under the ISC License.

---

# Conclusion

CCK is a complete MERN-stack web application that demonstrates frontend-backend integration, authentication systems, database operations, API development, and responsive UI implementation. The project serves as a strong portfolio-level academic and practical full-stack development project.