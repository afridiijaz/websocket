
```markdown
# 💬 Real-Time Chat App (WebSocket)

A simple, elegant, and fully functional **real-time chat application** built using **Node.js**, **Express**, and **Socket.IO**.  
This project demonstrates real-time, bidirectional communication between clients and the server, allowing instant message exchange without any page reloads.

---

## 🚀 Features
- ⚡ Real-time chat using WebSockets (`socket.io`)
- 🖼️ Modern and responsive front-end using HTML & CSS
- 💬 Broadcasts messages instantly to all connected clients
- 🧩 Simple and clean architecture for beginners
- 🔄 Auto-refresh message display without page reload
- 🎨 Attractive chat UI with alternating message bubbles

---

## 🛠️ Tech Stack
| Layer | Technology Used |
|--------|------------------|
| **Frontend** | HTML, CSS, EJS |
| **Backend** | Node.js, Express |
| **Real-Time Engine** | Socket.IO |
| **Runtime** | Node.js |
| **Package Manager** | npm |

---

## 📁 Project Structure

```

websocket/
│
├── public/
│   ├── style.css          # Chat interface styling
│   └── index.html         # Main front-end file served to users
│
├── index.js               # Node.js + Express + Socket.IO server
│
├── package.json           # Project metadata and dependencies
│
└── README.md              # Documentation file (you’re reading it)

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/afridiijaz/websocket.git
cd websocket
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm start
```

> The `start` command uses **nodemon** for live reloading.

### 4️⃣ Open in browser

Visit:

```
http://localhost:3000
```

---

## 💡 How It Works

1. When a user types a message and clicks “Send,” the message is emitted via:

   ```js
   socket.emit('message', input.value.trim());
   ```
2. The server receives this message and broadcasts it to all clients using:

   ```js
   io.emit('message', clientMsg);
   ```
3. Each connected client dynamically appends the new message inside a `<ul>` element on the chat screen.

This ensures **real-time two-way communication** between the server and all connected clients.


## 🧠 Learning Purpose



## 📷 Preview

*(You can add a screenshot of your app later here)*
![Chat App Screenshot](./preview.png)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push to your branch and open a Pull Request

---
