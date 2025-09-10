# 🚀 Asia Butterflies - Backend Environment Creation and Connection with Frontend
The aim of this project is to learn how to create a backend environment that will lately will connected to a frontend. The backend is created from scratch and will be connected to an already pre-existing frontend created by another group in F5. This project will enable us to learn how to properly build a backend following TDD principles, learn how to work with databases, endpoints and testing procedures. 
This project is a **fullstack web application** built with:  
- **Frontend:** React + Vite  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
---



## 📖 Table of Contents
- [About the Project](#about-the-project)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [API Documentation](#api-documentation)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  
- [Acknowledgments](#acknowledgments)  
- [License](#license)  

---
## 👩‍💻 Team Organization
- **Larysa**: Scrum Master / Developer  
- **MariCarmen**: Product Owner / Developer
- **Anngy**: Developer 
- **Valentina**: Developer  
- **Marianna**: Developer  
---
## 📦 Frameworks & Libraries Used

- **Node.js**  
  JavaScript runtime environment that allows using JavaScript outside the browser to build backend components such as web servers, APIs, and databases.  
  Thanks to **NPM (Node Package Manager)**, you can install ready-to-use libraries.  

  - **Express**  
    Framework for Node.js that makes it easier to create web servers and APIs. It’s lightweight, flexible, and ideal for JavaScript backend projects.  
    It provides built-in functions for defining routes, handling requests, responses, and middlewares.  

  - **Jest**  
    JavaScript testing framework (created by Facebook/Meta) that makes writing automated tests simple.  
    It’s used to verify that the code works as expected.  

  - **Supertest**  
    Library for testing APIs and HTTP servers. Works well together with Jest and allows simulating HTTP requests (GET, POST, PUT, etc.)  
    to your endpoints without needing to run the real server.  

---

## 🗂 Project Structure
root/
├── client/ # Frontend (React)
├── server/ # Backend (Node.js + Express)
├── docs/ # Documentation
├── .env.example # Example environment variables
└── README.md # Project documentation

## 🗂 Project Structure

api-butterfly/
│── app.js              # Main entry point of the application. Initializes the server and middleware.
│── package.json        # Project metadata: dependencies, scripts, and configuration.
│── .gitignore          # Specifies files and folders that should not be tracked by Git (node_modules, .env).
│── .env                # Environment variables (DB_ variables).
│── README.md           # Project documentation with setup, usage, and guidelines.
│
├── controllers/        # Controllers: contain the business logic. Receive requests from routes and interact with models.
├── database/           # Database configuration and connection setup (Sequelize, mySQL).
├── middlewares/        # Validation functions. 
├── models/             # Data models definition (e.g., schemas for MongoDB or Sequelize models).
├── node_modules/       # Installed dependencies managed by NPM or Yarn (auto-generated).
├── routes/             # API endpoints definition. Each route maps to a controller method.
└── test/               # Automated tests (unit, integration). Example: butterfly.test.js



**Architecture:**  
Frontend communicates with backend through REST API (`/api/...`).  
Backend connects to MongoDB and exposes data to the frontend.  

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 16  
- npm or yarn  
- MongoDB installed (or Atlas connection string)  

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
cd client && npm install
cd ../server && npm install
Environment Variables
Create a .env file in both client and server folders.

Example for server:

ini
Copiar código
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/db
JWT_SECRET=your-secret-key
▶️ Usage
Run Backend
bash
Copiar código
cd server
npm run dev
Run Frontend
bash
Copiar código
cd client
npm run dev
Example API Request
bash
Copiar código
curl http://localhost:5000/api/users

---

## Educational License - F5

Copyright (c) 2025 [Your Team Name] - F5 Bootcamp

This project has been created in the context of F5 as a didactic exercise.

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this project and associated documentation files (the "Software"), to use 
the Software for educational and learning purposes only, subject to the following conditions:

1. The Software shall not be used for commercial purposes.  
2. Redistribution or modification is allowed only with proper attribution 
   to the original authors and F5.  
3. The Software is provided "as is", without warranty of any kind.  

By using this project, you agree to these terms.