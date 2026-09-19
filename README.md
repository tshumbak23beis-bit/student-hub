# Student Hub

A full-stack student collaboration platform designed to help students connect, ask questions, share knowledge, and collaborate in one place.

## About the Project

**Student Hub** is a full-stack web application developed to provide students with a simple platform for academic collaboration.

The platform allows students to ask questions, share posts, and access academic resources through a centralized web application.

This project was developed to gain practical experience in frontend development, backend development, REST APIs, database integration, Git/GitHub, and web application deployment.

## Features

- Student-oriented user interface
- User authentication
- Home page
- Student dashboard
- Questions and answers
- Posts and academic resources
- Frontend-backend API communication
- MongoDB database integration
- MongoDB Atlas
- Web deployment

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Icons

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- MongoDB Atlas

### Tools

- Git
- GitHub
- Visual Studio Code
- Vercel

## Project Outcomes

The following screenshot demonstrates the Student Hub user interface, questions and answers, academic posts, and backend/database integration.

![Student Hub Project Outcomes](./screenshots/student-hub-project-outcomes.png)

## Project Architecture

```text
                    ┌─────────────────┐
                    │     Student     │
                    │    / Browser    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React Frontend  │
                    │     (Client)    │
                    └────────┬────────┘
                             │
                       REST API Calls
                             │
                             ▼
                    ┌─────────────────┐
                    │ Node.js +       │
                    │ Express.js      │
                    │    (Server)     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    MongoDB      │
                    │     Atlas       │
                    └─────────────────┘
Project Structure
student-hub/
│
├── client/
│   └── React frontend
│
├── server/
│   └── Node.js + Express backend
│
├── screenshots/
│   └── student-hub-project-outcomes.png
│
└── README.md
Getting Started
1. Clone the Repository
git clone https://github.com/tshumbak23beis-bit/student-hub.git
cd student-hub
2. Install Frontend Dependencies
cd client
npm install
3. Install Backend Dependencies

Open another terminal:

cd server
npm install
4. Configure Environment Variables

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Replace your_mongodb_connection_string with your MongoDB Atlas connection string.

Important: Never upload your .env file or database credentials to GitHub.

5. Run the Backend

From the server directory:

npm start

The backend runs on:

http://localhost:5000
6. Run the Frontend

From the client directory:

npm start

The frontend runs on:

http://localhost:3000
Live Demo

Visit Student Hub

Project Objectives
Build a practical full-stack web application.
Create a centralized platform for student collaboration.
Develop a modern user interface using React.js.
Build backend services using Node.js and Express.js.
Integrate MongoDB for data storage.
Practice frontend-backend communication through REST APIs.
Use Git and GitHub for version control.
Deploy a web application for public access.
What I Learned

Through this project, I gained practical experience in:

React.js application development
REST API development
Node.js and Express.js
MongoDB database integration
Frontend-backend integration
Git and GitHub
Web application deployment
Debugging full-stack applications
Future Improvements
Real-time discussions
Notifications
Advanced search and filtering
Question and post categories
Voting and interaction features
Enhanced student profiles
Resource and file sharing
AI-assisted question recommendations
Improved mobile responsiveness
Developer

Tshumba Tshinyama Gabriella

Information Science Engineering Student
Bengaluru, India

Technical Skills

React.js JavaScript Node.js Express.js MongoDB REST APIs Git GitHub

This project was developed as an academic and personal software project for learning and portfolio develop
