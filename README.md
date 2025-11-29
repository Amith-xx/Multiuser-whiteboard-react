#  Multi-User Collaborative Whiteboard  
A real-time, multi-user collaborative whiteboard where users can draw, comment, react with emojis, and erase the board — all synchronized instantly across all connected clients.

This project is built using **React + Socket.io + Node.js**, with a fully deployed frontend on **GitHub Pages** and backend hosted on **Render**.

---

## 📌 Features

### ✏️ Real-Time Drawing  
- Multiple users can draw on the whiteboard simultaneously  
- Smooth line drawing  
- Each stroke is broadcast instantly through Socket.io  

### 🗑️ Erase Board  
- When any user clicks “Erase”, the entire whiteboard clears on **all clients**  
- Instant synchronization through backend events  

### 💬 Live Comments  
- Users can send comments in real-time  
- Comments instantly appear in all users’ comment panels  

### 😀 Emoji Reactions  
- Emoji picker built in React  
- Reactions animate (floating upwards)  
- Visible to all connected users  

### 🎨 Color Picker  
- Users can choose a color before drawing  
- Color is included with each stroke  

### 🖼️ Export Drawing  
- Export the current whiteboard as a PNG image  

### 🌍 Multi-User Support  
- Works across multiple tabs, devices, networks  
- Backend auto-wakes on Render (free tier friendly)

---

## 🛠️ Tech Stack

### **Frontend**
- React + Vite  
- Socket.io Client  
- GitHub Pages Deployment  

### **Backend**
- Node.js  
- Express  
- Socket.io  
- Hosted on Render  

---

## 🧩 Architecture

React (GitHub Pages)
⬇ WebSocket
Node.js + Socket.io (Render)
⬆ Real-time Events
Multiple Connected Users


The backend handles broadcast events:
- `draw` → Send strokes to all users  
- `comment` → Send comments to all users  
- `reaction` → Send emoji reactions  
- `erase` → Clear the board for everyone  

---

## 🚀 Live Demo

🔗 **Frontend:**  
https://amith-xx.github.io/Multiuser-whiteboard-react/

🔗 **Backend (Socket.io server):**  
https://whiteboard-backend-szwv.onrender.com/

---

## 📦 Installation & Setup (Local)

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/amith-xx/Multiuser-whiteboard-react.git

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

🌐 Deployment
Frontend — GitHub Pages

Configured using:

"predeploy": "npm run build",
"deploy": "gh-pages -d dist"


Vite config includes:

base: '/Multiuser-whiteboard-react/'

Backend — Render

Auto-build: npm install

Start command: node server.js

Port: process.env.PORT

📁 Project Structure
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  └─ App.jsx
│  └─ vite.config.js
│
└─ backend/
   ├─ server.js
   └─ package.json

🧪 How It Works

User performs an action (draws, comments, reacts)

Action is emitted via Socket.io

Backend receives the event

Backend broadcasts to all connected sockets

All users' UI updates instantly

🤝 Contributing

Pull requests and improvements are welcome!
If you find a bug, feel free to submit an issue.

📄 License

This project is open-source under the MIT License.

👨‍💻 Author

Amith A
B.Tech Computer Science Student
