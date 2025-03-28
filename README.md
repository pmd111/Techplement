📜 Quote App
A simple full-stack web application that displays random quotes and allows users to search quotes by author. Built using React (Frontend), Express.js (Backend), and SQLite (Database).

🚀 Features
✅ Fetch a random quote
✅ Search quotes by author
✅ Simple REST API using Express.js
✅ SQLite for lightweight database storage
✅ CORS enabled for smooth frontend-backend communication

🛠️ Tech Stack
Frontend: React.js

Backend: Node.js with Express.js

Database: SQLite

Styling: Tailwind CSS

📁 Project Structure
r
Copy
Edit
quote-app/
│── client/        # React Frontend
│   ├── src/
│   │   ├── App.js  # Main React Component
│   │   ├── index.js
│   ├── package.json  # React dependencies
│── server/        # Express.js Backend
│   ├── server.js  # Main Server File
│   ├── quotes.db  # SQLite Database
│   ├── package.json  # Backend dependencies
│── README.md      # Project Info

⚙️ Installation & Setup
1️⃣ Setup Backend (Server)
sh
Copy
Edit
cd server
npm install
node server.js
🟢 Server will run on http://localhost:5000

2️⃣ Setup Frontend (Client)
sh
Copy
Edit
cd client
npm install
npm start
🟢 Frontend will run on http://localhost:3000

📜 License
This project is open-source under the MIT License.
