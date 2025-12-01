# 📘 Course Explorer

A modern, responsive, and accessible learning platform built to demonstrate React proficiency. This application renders dynamic course content, supports rich Markdown, tracks user progress, and includes a full-featured course creator.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Lighting%20Fast-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Live Demo

**[View the Live Application Here](https://course-explorer-omega.vercel.app/)**

_(Note: Data is persisted in your browser's LocalStorage. Feel free to create courses or mark topics as complete; data will remain until you click "Reset to Defaults".)_

---

## 🎯 Project Overview

![Animation](https://github.com/user-attachments/assets/e9483059-a627-4977-93b3-aed97f114d57)
![Animation3](https://github.com/user-attachments/assets/d95f5c75-9d9d-4bfc-ae91-871e1db5a6aa)



This project was built as a comprehensive solution to the **React Intern Take-Home Assignment**. It goes beyond the core requirements to implement a production-ready UI/UX with "Glassmorphism" aesthetics, full keyboard accessibility, and content management features.

### 🌟 Key Features Implemented

| Category        | Features                                                                                                                                                                                                                                                     |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**        | ✅ Dynamic Course Renderer (JSON to UI)<br>✅ Nested Navigation (Course → Topic → Subtopic)<br>✅ Real-time Search & Filtering<br>✅ Admin Dashboard (Read-only User List)                                                                                   |
| **UX & Design** | ✅ **Glassmorphism Theme** (Dark Mode Aesthetic)<br>✅ Fully Responsive Mobile Layout<br>✅ **Keyboard Navigation** (Arrow keys for menus, Tab focus rings)<br>✅ ARIA-friendly labels                                                                       |
| **Content**     | ✅ **Rich Markdown**: Syntax Highlighting, Tables, GitHub-style Alerts (`[!NOTE]`)<br>✅ Deep Linking (Shareable URLs via Query Params)<br>✅ Breadcrumb Navigation                                                                                          |
| **Bonus** 🏆    | ✅ **Course Creator:** Create & Edit courses with dynamic forms<br>✅ **Persistence:** `localStorage` saves progress & new courses<br>✅ **Progress Tracking:** Dynamic % bars at Course & Topic levels<br>✅ **Data Mgmt:** Import/Export JSON & Reset Data |

---

## 🛠️ Tech Stack & Design Choices

### Architecture

- **State Management:** I opted for **Context-free Local State** combined with a custom `useLocalStorage` hook. This keeps the app lightweight without the overhead of Redux, while ensuring user data persists across reloads.
- **Routing:** Utilized `react-router-dom` with **Query Parameters** (`?course=id&topic=index`) instead of path params. This allows for easier deep-linking and state preservation without complex route nesting.
- **Performance:** Heavy calculations (like progress percentages and search filtering) are optimized using `useMemo` to prevent unnecessary re-renders.

### Styling

- **Tailwind CSS:** Used for utility-first styling.
- **Custom Design System:** Defined CSS variables in `index.css` for the "Glass" effect (`backdrop-filter: blur`), custom scrollbars, and the "Electric Blue" (`#1A73E8`) accent color used for focus states and active links.

---

## 📂 Folder Structure

The project follows a scalable feature-based structure:

```text
src/
├── assets/              # Static assets (images)
├── components/          # Reusable UI Components
│   ├── CourseForm.jsx   # Complex form for creating/editing courses
│   ├── Sidebar.jsx      # Main navigation with keyboard logic
│   ├── SubtopicView.jsx # Markdown renderer & content display
│   ├── TopicList.jsx    # Curriculum list with progress bars
│   └── ... (Atoms: SearchBar, LoadingState, etc.)
├── data/                # Initial JSON seeds
│   ├── courses.json     # Default curriculum data
│   └── users.json       # Mock user data for Admin
├── hooks/               # Custom Logic
│   ├── useCoursesLocal.js # Logic for CRUD operations on courses
│   └── useLocalStorage.js # Persistence layer
├── pages/               # Route Views
│   ├── Home.jsx         # Main Dashboard Layout
│   ├── Admin.jsx        # User Management View
│   └── Welcome.jsx      # Landing Page
├── routes/              # Routing Configuration
│   └── AppRouter.jsx    # Main Layout Wrapper
└── utils/               # Helpers
    └── helpers.js       # ID generation and data normalization
```

## 🚀 Getting Started Locally

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/shaktipriya13/Frontend-Assignment.git](https://github.com/shaktipriya13/Frontend-Assignment.git)
    cd course-explorer
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run Development Server**

    ```bash
    npm run dev
    ```

4.  **Build for Production**

    ```bash
    npm run build
    ```

---

## 🧩 How to Use

1.  **Navigation:** Use the **Left Sidebar** to browse courses. You can use `Up/Down` arrow keys to navigate and `Right Arrow` to jump into the curriculum.
2.  **Learning:** Click on a topic to view content. Use the checkbox in the top right to **Mark as Complete**. Watch the progress bar update\!
3.  **Creation:** Click **"+ Create New Course"** in the sidebar to open the editor. You can add modules and lessons dynamically.
4.  **Data Management:** Use the **Export Data** button to save your progress to a JSON file, or **Import JSON** to load it back later.

---

**Built by Shakti Priya**

---
