<div align="center">

  # ⚡ Anuj Mishra | Engineering & Software Portfolio

  <p align="center">
    <strong>Modern, responsive portfolio showcasing software engineering, AI/ML workflows, and IoT systems.</strong>
  </p>

  <p align="center">
    <a href="#-featured-projects">View Projects</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-contact">Contact</a>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  </div>

</div>

---

## 📌 Overview

This repository contains the source code for **Anuj Mishra's Personal Portfolio**. Built with **React** and bundled with **Vite**, the application showcases high-impact software development, AI/ML engineering, and embedded electronics projects wrapped in a futuristic dark glassmorphic UI.

---

## 🚀 Featured Projects

### 🛒 1. Full-Stack E-Commerce & Recommendation System
> **Category:** Web Development & Intelligent Systems  
> **Tech Stack:** `Spring Boot` • `Spring AI` • `React.js` • `PostgreSQL` • `OpenAI API`

- **Architecture:** Enterprise-grade full-stack web application with a scalable Spring Boot backend REST API and an interactive, responsive React frontend.
- **AI Recommendation Engine:** Implements **Spring AI** to deliver context-aware product recommendations based on real-time browsing patterns and vector search embeddings stored in PostgreSQL with pgvector.
- **Features:** Catalog browsing, shopping cart state management, checkout simulation, and AI-driven personalized product feeds.

---

### 🚦 2. Smart City Traffic Management System
> **Category:** Engineering & IoT / Computer Vision  
> **Tech Stack:** `Python` • `OpenCV` • `TensorFlow` • `Raspberry Pi`

- **Computer Vision Pipeline:** Uses real-time camera streams processed with **OpenCV** to detect and count vehicle density across multiple roadway lanes.
- **Adaptive Signal Control:** A custom algorithm dynamically adjusts green and red light intervals based on live traffic congestion instead of fixed timers.
- **Hardware Integration:** Designed for edge deployment on **Raspberry Pi**, transmitting digital GPIO control signals directly to physical traffic light arrays.

---

## 💻 Tech Stack & Skills

| Domain | Technologies & Tools |
| :--- | :--- |
| **Frontend** | React 19, JavaScript (ES6+), HTML5, Modern CSS3, Lucide Icons, Glassmorphism UI |
| **Backend & APIs** | Spring Boot, Spring AI, REST APIs, Java, Python |
| **Data & AI/ML** | Machine Learning, Computer Vision (OpenCV, TensorFlow), Vector Embeddings, Data Analysis |
| **Databases** | PostgreSQL, Vector Search |
| **Hardware & IoT** | Raspberry Pi, Digital Systems Design, Microcontrollers |
| **DevOps & Tools** | Git, GitHub, Vite, VS Code, IntelliJ IDEA, Antigravity IDE |

---

## ✨ Key Website Features

- 🌌 **Futuristic Glassmorphic UI:** Sleek dark-mode aesthetic with interactive gradient orbs, backdrop blur filters, and glowing hover states.
- 🎯 **Dynamic Category Filtering:** Easily filter projects by domain (Web Development, Engineering, AI/ML).
- 📊 **Visual Learning Journey:** Animated progress indicators illustrating technical depth across programming, full-stack dev, data science, and AI.
- 🎓 **Academic Timeline:** Detailed chronological education cards highlighting degree, coursework, location, and CGPA (9.7/10).
- ⚡ **Admin Dashboard (CRUD):** In-app password-protected management portal that allows adding, editing, and deleting project cards with live preview and browser persistence (`localStorage`).
- 📱 **Fully Responsive:** Optimized for flawless viewing across mobile, tablet, laptop, and ultra-wide displays.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anujmishra1823-boop/YOUR-REPO-NAME.git
   cd "Anuj's Portfolio"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### Production Build

To create an optimized production build:
```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
Anuj's Portfolio/
├── public/                     # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/                 # Images, banners, and logos
│   ├── components/             # Reusable UI components
│   │   ├── About.jsx           # Profile summary and highlight cards
│   │   ├── AdminDashboard.jsx  # Password-protected CRUD project management modal
│   │   ├── Contact.jsx         # Contact links and message form
│   │   ├── CurrentlyLearning.jsx # Active skills in progress
│   │   ├── Education.jsx       # Academic history timeline
│   │   ├── Exploring.jsx       # Areas of technical exploration
│   │   ├── Footer.jsx          # Footer with social links & copyright
│   │   ├── Hero.jsx            # Dynamic headline banner & call-to-action
│   │   ├── Highlights.jsx      # Key academic and skill stat badges
│   │   ├── Icons.jsx           # Custom SVG and social icon helpers
│   │   ├── LearningJourney.jsx # Visual proficiency indicators
│   │   ├── Navbar.jsx          # Header navigation bar with smooth scroll links
│   │   ├── Projects.jsx        # Project showcase grid & category tabs
│   │   └── Skills.jsx          # Categorized technical skill lists
│   ├── data/
│   │   ├── defaultProjects.json # Seed project records
│   │   └── profileData.js      # Centralized bio, education, skills, and contact data
│   ├── App.css                 # Global styling rules
│   ├── App.jsx                 # Root component orchestrating layout & state
│   ├── index.css               # Design tokens, themes, typography, and glass effects
│   └── main.jsx                # Application entry point
├── index.html                  # HTML entry template
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite bundler configuration
└── README.md                   # Project documentation
```

---

## ⚙️ Customization

- **Profile & Education Data:** Update personal info, academic grades, and skills in [`src/data/profileData.js`](src/data/profileData.js).
- **Projects Catalog:** Add or edit project entries directly in [`src/data/defaultProjects.json`](src/data/defaultProjects.json) or manage them live through the interactive in-app Admin Dashboard.

---

## 📬 Contact & Connect

- **Author:** Anuj Mishra
- **Institution:** Sant Longowal Institute of Engineering and Technology (SLIET)
- **GitHub:** [@anujmishra1823-boop](https://github.com/anujmishra1823-boop)

---

<div align="center">
  <sub>Built with ❤️ by Anuj Mishra using React & Vite</sub>
</div>
