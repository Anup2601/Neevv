# Talkify

## Overview
This is a real-time chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack with Socket.io for instant messaging. The application allows users to sign up, log in, and chat with others in real time. The chat system is built with modern UI components and efficient state management.

## Features
- **User Authentication**: Secure login and signup using JWT authentication.
- **Real-time Messaging**: Instant message delivery using Socket.io.
- **Persistent Chat History**: Messages are stored in MongoDB for future access.
- **Typing Indicators**: See when the other user is typing.
- **Online/Offline Status**: Display user status in real-time.
- **Group Chat Support**: Create and manage chat groups.
- **Notifications**: Get notified when a new message is received.
- **Dark/Light Mode**: Toggle between different themes.
- **Mobile Responsive UI**: Built with Tailwind CSS for a seamless experience on all devices.

## Tech Stack

### Frontend
- **React 19** - UI framework for building components.
- **React Router DOM 7** - Client-side routing for navigation.
- **Zustand** - Lightweight state management.
- **Axios** - HTTP client for API requests.
- **Socket.io-client** - WebSocket communication for real-time chat.
- **React Hot Toast** - User-friendly notifications.
- **Tailwind CSS & DaisyUI** - Styling framework for responsive design.
- **Lucide-react** - Modern icons for UI components.

### Backend
- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web framework for building API routes.
- **MongoDB & Mongoose** - NoSQL database and ODM for handling data.
- **Socket.io** - Real-time communication between clients and server.
- **JWT (JSON Web Token)** - Authentication and authorization system.
- **Bcrypt.js** - Secure password hashing.
- **CORS** - Middleware for handling cross-origin requests.
- **Dotenv** - Environment variable management.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js (>= 16.x)**
- **MongoDB (Local or Atlas)**
- **Vite (for frontend development)**

### Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the backend directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```
Run the backend server:
```sh
cd src
nodemon index.js
```

### Frontend Setup
```sh
cd frontend
npm install
```
Run the frontend server:
```sh
npm run dev
```

## Usage
1. Start both frontend and backend servers.
2. Open `http://localhost:5173` in your browser.
3. Sign up or log in to start chatting.
4. Create a new chat or join an existing one.
5. Enjoy real-time messaging with other users!

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and get a JWT token.
- `GET /api/auth/user` - Get authenticated user details.

### Chat
- `POST /api/chat` - Create a new chat.
- `GET /api/chat` - Fetch all chats for a user.
- `GET /api/chat/:id` - Get details of a specific chat.

### Messages
- `POST /api/messages` - Send a new message.
- `GET /api/messages/:chatId` - Retrieve messages for a specific chat.

## Folder Structure
```
Talkify/
│── backend/
│   ├── src/
|   |   ├── controllers/
|   |   ├── lib/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   ├── index.js
|   ├── .env
│   ├── package.json
│
│── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.js
│   │   ├── main.jsx
│   ├── package.json
│
│── README.md
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any queries, feel free to reach out via anupm0873@gmail.com .

