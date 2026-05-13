# 🚀 Global Chat - Real-Time Messaging App

![Banner](./assets/banner.png)

## ✨ Overview
**Global Chat** is a modern, high-performance real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io**. It provides a seamless, low-latency communication experience with a stunning glassmorphism UI.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI components and hooks.
- **Vite** - Lightning-fast build tool.
- **Tailwind CSS 4** - Next-gen styling with native CSS variables.
- **Socket.io-client** - Real-time bidirectional communication.
- **Framer Motion** - Smooth animations and transitions.
- **Lucide React** - Beautiful, consistent iconography.
- **Zustand** - Lightweight state management.

### Backend
- **Node.js & Express** - Scalable server architecture.
- **Socket.io** - WebSocket implementation for real-time events.
- **MongoDB & Mongoose** - Robust data persistence.
- **JWT & Bcryptjs** - Secure authentication and password hashing.

---

## 🌟 Key Features
- **Real-Time Messaging**: Instant message delivery using WebSockets.
- **Modern UI/UX**: Clean, responsive design with glassmorphism effects.
- **Auto-Scrolling**: Messages automatically scroll to the bottom on new arrivals.
- **Dynamic Avatars**: Randomized user avatars for a personalized feel.
- **Online Status**: Visual indicator for active connection.
- **Secure Architecture**: Environment-based configuration and industry-standard security.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhan-1212s/Real-Time-Chat-App.git
   cd Real-Time-Chat-App
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

### Running the App

1. **Start the Server**
   ```bash
   cd server
   npm start # or npm run dev if using nodemon
   ```

2. **Start the Client**
   ```bash
   cd client
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure
```text
Real-Time-Chat-App/
├── client/           # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
├── server/           # Backend (Node.js + Express)
│   ├── index.js
│   ├── models/
│   └── routes/
└── assets/           # Media and documentation images
```

---

## 📸 Screenshots
| Chat Interface | Mobile View |
| :---: | :---: |
| ![Desktop View](./assets/banner.png) | ![Mobile View](./assets/banner.png) |

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License
Distributed under the ISC License. See `LICENSE` for more information.

---

Built with ❤️ by [Subhan](https://github.com/subhan-1212s)
