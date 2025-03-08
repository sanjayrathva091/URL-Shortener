# **🔗 URL Shortener**

A simple **MERN + Redis + Next.js**-based URL shortener that allows users to generate short links and redirect them to the original URL.

---

## **🚀 Live Demo**

🌐 **Live URL:** [url-shortener-theta-opal.vercel.app](https://url-shortener-theta-opal.vercel.app)

---

## **🚀 Features**

✅ Shorten long URLs  
✅ Redirect shortened URLs to the original  
✅ Store and retrieve URLs using **MongoDB + Redis cache**  
✅ Simple UI built with **Next.js**  
✅ Free cloud Redis support (e.g., Upstash)

---

## **🛠️ Tech Stack**

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Redis
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## **📂 Project Structure**

```
/url-shortener
 ├── /client        # Next.js frontend
 ├── /server        # Express.js backend
 ├── /README.md     # Documentation
```

---

## **💻 Installation & Setup**

### **1️⃣ Clone the Repo**

```bash
git clone https://github.com/sanjayrathva091/url-shortener.git
cd url-shortener
```

### **2️⃣ Setup Backend**

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
REDIS_URL=your_redis_url
```

Start the server:

```bash
npm start
```

### **3️⃣ Setup Frontend**

```bash
cd ../client
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

Start Next.js:

```bash
npm run dev
```

---

## **🌍 Deployment**

### **Frontend (Vercel)**

```bash
vercel --prod
```

### **Backend (Render)**

1. Push your code to GitHub
2. Create a **Render** service and connect it
3. Add `.env` variables
4. Deploy 🚀

---

## **🎯 Usage**

1. Enter a long URL
2. Click **Shorten**
3. Copy the shortened link
4. Paste in the browser → Redirects to the original URL!

---

## **📸 Screenshots**

[![Url-Shortner-Project-sample.jpg](https://i.postimg.cc/bJCxnZ3g/Url-Shortner-Project-sample.jpg)](https://postimg.cc/r04RXw6R)

---

## **📜 License**

MIT License

---

### **👨‍💻 Author**

Created by **[Sanjay Rathva](https://github.com/sanjayrathva091)** 🚀
