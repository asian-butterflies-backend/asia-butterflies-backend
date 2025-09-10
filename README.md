# 🚀 Asia Butterflies - Backend Environment Creation and Connection with Frontend

The aim of this project is to learn how to create a backend environment that will lately will connected to a frontend. The backend is created from scratch and will be connected to an already pre-existing frontend created by another group in F5. This project will enable us to learn how to properly build a backend following TDD principles, learn how to work with databases, endpoints and testing procedures. 

This project is a **fullstack web application** built with:  
- **Frontend:** React + Vite (inherited from original project)
- **Backend:** Node.js, Express, Jest, Supertest
- **Database:** MySQL, Sequelize updated to MongoDB

---

## 📖 Table of Contents

- [Team Organization](#team-organization)
- [Frameworks & Libraries Used](#frameworks-libraries-used)  
- [Databases & ORM used](#databases-orm-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Educational License - F5](#educational-license-f5)

---

## 👩‍💻 Team Organization

- **Larysa**: Scrum Master / Developer  
- **MariCarmen**: Product Owner / Developer
- **Angelica**: Developer 
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

## 🛠️ Databases & ORM used

- **MySQL**  
  Relational database management system (RDBMS) that stores data in structured tables with rows and columns.  
  It is widely used for applications requiring strong data consistency and relationships between entities.  

- **Sequelize**  
  Promise-based ORM (Object Relational Mapper) for Node.js.  
  It provides an abstraction layer to interact with SQL databases (like MySQL) using JavaScript instead of raw SQL queries.  
  With Sequelize, you can define models and relationships, and it will generate the corresponding SQL queries automatically.  

- **MongoDB (updated)**  
  Document-oriented NoSQL database that stores data in flexible JSON-like documents.  
  Unlike relational databases, it doesn’t require predefined schemas, making it ideal for projects where data structures may evolve quickly.  
  This project has been **updated from MySQL/Sequelize to MongoDB** to improve flexibility and scalability.  

---

## 🗂 Project Structure
```
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
```
---

## ⚙️ Installation

# Clone repository
```bash
git clone https://github.com/asian-butterflies-backend/asia-butterflies-backend.git
cd asia-butterflies-backend
```

# Install dependencies
```bash
npm install
```

# Create .env for environment Variables 
Create a .env file in LOCAL with the following data:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=[--your password here--]
DB_NAME=butterfly_app
DB_NAME_TEST=butterfly_test
DB_DIALECT=mysql
```

# Run up testing develop and tests (TDD)
```bash
npm run api
npm run test
```
---

## Educational License - F5

Copyright (c) 2025 - Team 3: Asian Butterflies - F5 Bootcamp

This project has been created in the context of F5 as a didactic exercise.

Permission is hereby granted, free of charge, to any person obtaining a copy of this project and associated documentation files (the "Software"), to use the Software for educational and learning purposes only, subject to the following conditions:

1. The Software shall not be used for commercial purposes.
2. Redistribution or modification is allowed only with proper attribution to the original authors and F5.
3. The Software is provided "as is", without warranty of any kind.

By using this project, you agree to these terms.