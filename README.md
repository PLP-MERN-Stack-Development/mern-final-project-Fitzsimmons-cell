# MERN Final Project - Fitzsimmons Cell

## Project Overview
This is a **full-stack MERN application** for managing city data.  
It demonstrates basic CRUD operations with a **MongoDB** database, **Express** backend, and **React (Vite)** frontend. The app is ready for deployment and provides a clean interface for managing cities.

---

## Live Demo
- **Frontend:** https://mern-final-project-jgot.vercel.app/ 
- **Backend:** https://mern-final-project-fitzsimmons-cell-1.onrender.com
---

## Technology Stack
- **Frontend:** React, Vite, Axios  
- **Backend:** Node.js, Express, Mongoose  
- **Database:** MongoDB  
- **Other:** dotenv, cors, morgan  

---

## Folder Structure

### Backend
/backend
├─ server.js
├─ routes/cityRoute.js
├─ controllers/cityController.js
├─ models/City.js
├─ config/db.js
├─ middleware/errorHandler.js
└─ package.json

shell
Copy code

### Frontend
/frontend
├─ src/main.jsx
├─ src/App.jsx
├─ src/components/CityList.jsx
├─ src/components/CityForm.jsx
├─ src/api/cityApi.js
├─ src/styles/
└─ package.json

yaml
Copy code

---

## Installation

### Backend
```bash
cd backend
npm install
Create .env file with:

ini
Copy code
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
Start backend:

bash
Copy code
npm run dev
Frontend
bash
Copy code
cd frontend
npm install
npm run dev
Open the displayed URL in a browser.

API Routes
Method	Endpoint	Description
GET	/api/cities	Get all cities
GET	/api/cities/:id	Get city by ID
POST	/api/cities	Add new city
PUT	/api/cities/:id	Update city by ID
DELETE	/api/cities/:id	Delete city by ID

Deployment
Frontend: Vercel

Backend: Render

Set environment variables on your platform (MongoDB URI, PORT).