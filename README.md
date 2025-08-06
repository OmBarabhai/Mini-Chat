# 🗨️ Mini Chat App

A minimal chat and contact manager built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can send messages, view chat history, and manage contacts. Styled simply for clarity and learning purposes.

---

## 🚀 Features

- 📩 Send and receive messages between users
- 📖 View all chat messages in chronological order
- 📝 Edit or delete messages
---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** EJS templating engine, Bootstrap (optional)
- **Others:** Method-override for PATCH/DELETE requests

---
```
## 📁 Project Structure
Mini-Chat/
├── public/
│   ├── css/
│   │   └── style.css              # Styling for chat UI
│   ├── js/
│   │   └── client.js              # Client-side socket logic
│   └── images/                    # (Optional) Project images or logos
│
├── views/
│   └── index.ejs                  # Main chat page template
│
├── .gitignore                     # Git ignored files (e.g., node_modules)
├── package.json                   # Project dependencies and scripts
├── server.js                      # Main server file (Express + Socket.IO)
└── README.md                      # Project overview and setup guide


```
---
📸 Screenshots
---
💬 Chat Page
---

<img width="100%" alt="Mini Chat Screenshot" src="https://github.com/user-attachments/assets/afe85a96-9cdf-41c5-9b5e-83b436e64ecb" />

🖊️ Edit Message
---

<img width="614" height="413" alt="Edit Chat Message" src="https://github.com/user-attachments/assets/b209fd62-6c93-4751-8094-65fc47c87505" />

🆕 New Chat
---

<img width="554" height="617" alt="New Chat Message" src="https://github.com/user-attachments/assets/49f89811-1919-47e5-a90f-590cb676f1dd" />


You can update the image URLs if you upload your own screenshots.

---

## 🔧 Local Setup

1. **Clone the repo**



```

git clone https://github.com/OmBarabhai/minichat.git

cd minichat
```


Install dependencies
```
npm install
```


Set up MongoDB

Make sure MongoDB is running locally or connect using MongoDB Atlas.

You can update the MongoDB connection string inside server.js.

Start the server
```
node server.js
```
```
http://localhost:8080/chats
```
