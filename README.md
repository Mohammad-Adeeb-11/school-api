# School Management API

This project is a **Node.js REST API** built using **Express.js and MySQL** for managing school data.

The API allows users to:

• Add new schools  
• Retrieve schools sorted by proximity to a user’s location  

This project was developed as part of a **Node.js internship assignment**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MySQL
- Postman
- Nodemon

---

## 📂 Project Structure
school-api
│
├── server.js
├── db.js
├── routes
│ └── schoolRoutes.js
├── package.json
├── .gitignore
└── README.md


---

## 🗄️ Database Setup

Create a MySQL database and table.

```sql
CREATE DATABASE schooldb;

USE schooldb;

CREATE TABLE schools (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 address VARCHAR(255) NOT NULL,
 latitude FLOAT NOT NULL,
 longitude FLOAT NOT NULL
);

📡 API Endpoints
1️⃣ Add School

Endpoint

POST /addSchool

Request Body

{
"name": "City Public School",
"address": "Mumbai",
"latitude": 19.0760,
"longitude": 72.8777
}

Response

{
"message": "School added successfully",
"schoolId": 1
}
2️⃣ List Schools

Returns all schools sorted by distance from the user's location.

Endpoint

GET /listSchools

Query Parameters

latitude
longitude

Example

/listSchools?latitude=19.07&longitude=72.87
📏 Distance Calculation

The API calculates the distance between the user's location and each school using coordinate comparison and sorts the results based on proximity.

⚙️ Installation

Clone the repository

git clone https://github.com/Mohammad-Adeeb-11/school-api.git

Move into the project folder

cd school-api

Install dependencies

npm install

Run the server

npm run dev

Server will run on

http://localhost:5000
🧪 Testing APIs

You can test the APIs using Postman.

Endpoints:

POST /addSchool
GET /listSchools
🌐 Live API

(Will be available after deployment)

https://your-api-url.onrender.com
👨‍💻 Author

Mohammad Adeeb

BCA Student
Rajiv Gandhi College of Computer Science

Interested in:

Backend Development

MERN Stack

Web Development

📌 Assignment Objective

Develop Node.js APIs using Express.js and MySQL to manage school data and sort schools based on proximity to a user’s location.
