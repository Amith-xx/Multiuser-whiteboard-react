# 🚀 Multi-User Collaborative Whiteboard  
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


