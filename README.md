# Zerodha-Inspired Trading Platform

A full-stack web application inspired by the interface and workflow of a modern online trading platform.

The project is organized into separate frontend, dashboard, and backend applications and demonstrates full-stack development with React.js, Node.js, Express.js, MongoDB, REST APIs, routing, data visualization, and deployment.

> This project is independently developed for learning and demonstration purposes and is not affiliated with Zerodha.

## 🚀 Live Demo

**Frontend / Landing Site:**
https://zerodhaclone-frontend.netlify.app/

**GitHub Repository:**
https://github.com/homika482005/zerodha-clone

## ✨ Features

### Landing Site

* Trading-platform inspired user interface
* Responsive web pages
* Navigation between application sections
* React Router based routing

### Trading Dashboard

* Dashboard overview
* Orders
* Holdings
* Positions
* Funds
* Apps section
* User/profile area
* Interactive data presentation

### Order Management

* Create new orders
* Store order information through the backend
* Connect dashboard actions with backend APIs

### Holdings & Positions

* Retrieve holdings from the backend
* Retrieve positions from the backend
* Display portfolio-related information in the dashboard

### Data Visualization

* Chart-based dashboard visualization
* Doughnut/chart components for portfolio presentation

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* React Router
* Bootstrap

### Dashboard

* React.js
* React Router
* Axios
* Material UI
* Chart.js
* react-chartjs-2

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* CORS
* dotenv
* Passport / Passport Local

### Deployment

* Netlify for the frontend
* Backend deployment configured separately

## 🏗️ Project Structure

```text
zerodha-clone/
│
├── frontend/       # Landing site / frontend application
│
├── dashboard/      # Trading dashboard application
│
├── backend/        # Express + MongoDB backend
│
└── .gitignore
```

## 🔄 Application Architecture

```text
                   ┌─────────────────────┐
                   │      Frontend       │
                   │      React.js       │
                   └──────────┬──────────┘
                              │
                              │
                              ▼
                   ┌─────────────────────┐
                   │      Dashboard      │
                   │ React + Material UI │
                   │   Axios + Chart.js  │
                   └──────────┬──────────┘
                              │
                         REST APIs
                              │
                              ▼
                   ┌─────────────────────┐
                   │       Backend       │
                   │ Node.js + Express   │
                   └──────────┬──────────┘
                              │
                           Mongoose
                              │
                              ▼
                   ┌─────────────────────┐
                   │      MongoDB        │
                   └─────────────────────┘
```

## 🔌 Backend API

The backend uses Express.js with MongoDB/Mongoose for application data.

Current API functionality includes:

### Holdings

```text
GET /allHoldings
```

Returns holdings data from MongoDB.

### Positions

```text
GET /allPositions
```

Returns positions data from MongoDB.

### Orders

```text
POST /newOrder
```

Creates and stores a new order using the submitted order information.

### Backend Status

```text
GET /
```

Returns a simple backend status response.

## 🗄️ Data Models

The backend uses Mongoose models for trading-related data, including:

* Holdings
* Positions
* Orders

These models are used to persist application data in MongoDB.

## 📊 Dashboard Navigation

The dashboard provides dedicated sections for:

```text
Dashboard
Orders
Holdings
Positions
Funds
Apps
```

The navigation is implemented using React Router.

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/homika482005/zerodha-clone.git
cd zerodha-clone
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Dashboard

Open another terminal:

```bash
cd dashboard
npm install
npm start
```

### 4. Backend

Open another terminal:

```bash
cd backend
npm install
npm start
```

The backend uses environment configuration for the MongoDB connection.

## 🔐 Environment Configuration

Create a `.env` file inside the backend directory.

```env
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

Use your own MongoDB connection string and never commit credentials or secrets to GitHub.

## 🧠 Key Development Concepts

This project provided hands-on experience with:

* React component-based development
* Client-side routing
* REST API integration
* Express.js backend development
* MongoDB data persistence
* Mongoose models
* Frontend-backend integration
* Dashboard development
* Chart-based visualization
* Authentication-related backend setup
* Application deployment

## 📸 Screenshots

Screenshots of the landing page and trading dashboard can be added here to demonstrate the UI and major application views.

## 🔗 Project Links

**Live Demo:**
https://zerodhaclone-frontend.netlify.app/

**GitHub:**
https://github.com/homika482005/zerodha-clone

## 🎯 Project Goal

The main goal of this project was to gain practical experience building and deploying a multi-part full-stack application while working with frontend development, backend APIs, database integration, routing, dashboards, and data visualization.
