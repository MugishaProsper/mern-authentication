# Node.js Authentication App

A simple authentication system built with Node.js using JWT (JSON Web Tokens) for authentication and MongoDB as the database. This app demonstrates how to securely handle user registration, login, and protected routes.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)

## Features
- User registration with email and password.
- Passwords are hashed using bcrypt for security.
- JWT-based authentication for secure login.
- Protected API routes that require a valid JWT token.
- MongoDB as the database for storing user credentials.
- Email verification machanisms

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for interacting with MongoDB.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT).
- **dotenv**: Loads environment variables from a `.env` file.
- **cors**: Middleware to allow cross-origin requests.
- **nodemon** (optional): For automatic server restarts during development.
- **Mailtrap with Nodemailer** : For sending verification emails to users

## Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (Local or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/nodejs-authentication-app.git
cd nodejs-authentication-app
```
### 2. Set up enviroment variables
```bash
1. Create .env file in project root directory
jwt_secret = your_jwt_secret_key
database_url = your_mongo_db_url
mailtrap_host = your_mail_trap_host
mailtrap_user = your_mailtrap_username
mailtrap_pass = your_mailtrap_passkey
```
## Usage

### 1. Install required packages
```bash
npm init -y
```

### 2. Run the backend

``` bash
npm run dev
```
