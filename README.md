
# 🎓 Neevv – Open-Source EduTech Platform

Neevv is a **full-stack EdTech platform** designed to make learning smarter, interactive, and accessible.  
It provides students with engaging learning experiences, interactive tools, and AI-driven insights (future roadmap).  

---

## ✨ Features

- 📚 **Courses & Study Material** – Access curated resources across multiple domains  
- 🎥 **Interactive Learning** – Live classes, video lectures, and practice sessions  
- 📝 **Assessments & Quizzes** – Evaluate progress with built-in assessments  
- 📊 **Student Dashboard** – Track sessions, progress, and achievements  
- 🤖 **AI-Powered Insights** *(coming soon)* – Personalized learning paths & analytics  

---

## 🛠️ Tech Stack

### Frontend
- ⚡ React 19 + Vite  
- 🎨 Tailwind CSS + DaisyUI + Lucide Icons  
- 🔗 React Router v7  
- 📡 Axios (API calls)  
- ✨ Zustand (state management)  
- 🍞 React Hot Toast  

### Backend
- 🟢 Node.js + Express 4  
- 🗄️ MongoDB + Mongoose  
- 🔐 JWT + bcryptjs (authentication)  
- ☁️ Cloudinary (file uploads)  
- ⚡ Socket.IO (real-time communication)  
- ⚙️ dotenv (environment variables)  
- 📡 Nodemon (dev)  
- 🔄 CORS + cookie-parser  

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Anup2601/Neevv.git
````

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Setup

To run **Neevv** locally, you’ll need to set up a `.env` file inside the `backend/` directory.

### Required Keys

```bash
MONGO_URL=your_mongo_db_connection_string
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### How to Get Your Keys

#### 1️⃣ MongoDB Atlas (Database)

1. [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a **free shared cluster**
3. Add a **Database User** with username + password
4. Allow your IP (`0.0.0.0/0` for all IPs)
5. Copy your **connection string** from *Clusters → Connect → Connect your application*
6. Replace `<username>` & `<password>` with your credentials

Example:

```bash
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/neevv
```

#### 2️⃣ Cloudinary (Media Uploads)

1. [Create a free Cloudinary account](https://cloudinary.com/users/register/free)
2. Go to your **Dashboard**
3. Copy:

   * `CLOUDINARY_CLOUD_NAME`
   * `CLOUDINARY_API_KEY`
   * `CLOUDINARY_API_SECRET`

#### 3️⃣ JWT Secret

* Set any random string, e.g.:

```bash
JWT_SECRET=mySuperSecretKey123
```

---

## 🤝 Contributing

We ❤️ contributions!
Here’s how you can get started:

1. **Fork** the repository
2. **Create a new branch** (`feature/your-feature-name`)
3. **Make your changes**
4. **Commit & Push**
5. **Open a Pull Request** 🎉

📌 Before contributing, please:

* Check open [Issues](../../issues)
* Follow project coding standards

---

## 📌 Issues

* Found a bug? 🐛 [Open an issue](../../issues)
* Have a feature request? 💡 Let us know!

---

## 🌍 Community

* ⭐ Star this repo if you like the project
* 🗨️ Join discussions in **Issues / PRs**
* 👥 Collaborate & learn open-source practices

---

## 📸 Screenshots

<img width="1893" alt="screenshot1" src="https://github.com/user-attachments/assets/7cfa8f12-c0b1-422b-909e-b018168df014" />  
<img width="1897" alt="screenshot2" src="https://github.com/user-attachments/assets/658e854d-48be-44df-ba4d-910d21870922" />  
<img width="1895" alt="screenshot3" src="https://github.com/user-attachments/assets/e44e3a70-58d0-4904-b8d3-cb359973e5e6" />  

---

## 👨‍💻 Author

**Anup Mishra** – Full Stack Developer

* [GitHub](https://github.com/Anup2601)
* [LinkedIn](https://www.linkedin.com/in/anup-mishra-263154254/)
* 📧 [anupm0873@gmail.com](mailto:anupm0873@gmail.com)

---

## 📜 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute with attribution.

---

🚧 **Project Status:** In active development 🚀
Features and documentation may change frequently.
