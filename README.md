# 📝 Task Manager / To-Do App

A production-style full-stack Task Manager web application built using Vue.js, Node.js, Express, MySQL, and Docker. This project demonstrates secure authentication, user-based data isolation, RESTful API design, relational database modeling, and multi-container deployment using Docker Compose.

---

## 📌 Overview

This application allows users to register, log in, and manage their personal tasks securely. Each user can only access and modify their own tasks. The system is fully containerized using Docker, making it portable and easy to deploy.

---

## 🏗 System Architecture

Browser (Vue SPA)  
↓  
Node.js / Express REST API  
↓  
MySQL Database  

Dockerized Setup:

docker-compose  
├── frontend (Vue + Nginx)  
├── backend (Node + Express API)  
└── mysql (MySQL 8 Database)  

All services communicate through Docker networking.

---

## 🚀 Features

Authentication:
- User registration
- User login
- Password hashing using bcrypt
- JWT token generation
- Protected API routes with middleware verification

Authorization:
- Users can only view and manage their own tasks
- Backend enforces per-user filtering  
  Example query:  
  SELECT * FROM tasks WHERE user_id = ?

Task Management (CRUD):
- Create task
- View tasks
- Update task
- Delete task

Frontend:
- Responsive Vue SPA
- Dashboard interface
- Login and Register pages
- Navigation using Vue Router
- Clean and modern UI

---

## 🗂 Project Structure

WEBAPP/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── Navbar.vue
│   │   │   └── TaskCard.vue
│   │   ├── views/
│   │   │   ├── Login.vue
│   │   │   ├── Register.vue
│   │   │   └── Dashboard.vue
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── .gitignore

---

## 🗄 Database Schema

Users Table:
- id (Primary Key)
- name
- email (unique)
- password_hash
- created_at

Tasks Table:
- id (Primary Key)
- user_id (Foreign Key → users.id)
- title
- description
- created_at
- updated_at

Relationship:
1 User → Many Tasks

---

## 🐳 Docker Setup

1. Build and run containers:

docker-compose up --build

2. Open in your browser:

Frontend:
http://localhost:5173

Backend API:
http://localhost:3000

MySQL:
localhost:3306

No local Node.js or MySQL installation is required. Everything runs inside Docker containers.

---

## ⚙️ Environment Variables (Backend Example)

PORT=3000  
DB_HOST=mysql  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=todo  
JWT_SECRET=your_secret_key  

---

## 🧠 What This Project Demonstrates

- Full-stack application architecture
- RESTful API development
- Secure authentication with JWT
- Authorization and user data isolation
- Relational database design (MySQL)
- Docker multi-container orchestration
- Environment configuration management
- Production-style project structure

---

## 🛠 Technologies Used

- Vue 3
- Vite
- Tailwind CSS
- Node.js
- Express.js
- MySQL 8
- JWT (jsonwebtoken)
- bcrypt
- Docker
- Docker Compose

---

## 🔮 Future Improvements

- Task categories and tagging
- Due dates and reminders
- Role-based permissions (Admin/User)
- Pagination for tasks
- Unit and integration testing
- CI/CD integration
- Cloud deployment (AWS / DigitalOcean / Railway)

---

## 👨‍💻 Author

James De Vera  
GitHub: https://github.com/jdevs404

---

## 📌 Project Summary

This Task Manager application simulates a small-scale SaaS architecture. It showcases backend API development, frontend SPA integration, relational database management, authentication and authorization mechanisms, and Docker-based deployment.

It serves as a strong portfolio project demonstrating full-stack development and foundational DevOps skills.
