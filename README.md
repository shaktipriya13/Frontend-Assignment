# 📘 Course Explorer (React Intern Assignment)

A modern, responsive learning platform built with React, Vite, and Tailwind CSS. This application renders course content dynamically from JSON, supports Markdown rendering, and features a comprehensive admin surface.

**[🚀 View Live Demo](https://course-explorer-omega.vercel.app/)**

---

## 🧭 Project Overview

This project was built to demonstrate proficiency in:

- **React Architecture:** Component composition, custom hooks, and context-free state management.
- **Modern Styling:** A "Glassmorphism" UI using Tailwind CSS with dark mode aesthetics.
- **Data Handling:** Complex JSON parsing, deep linking, and local persistence.

## ✨ Features Implemented

### ✅ Core Requirements (Must-Haves)

- **Dynamic Course Renderer:** recursively maps courses -> topics -> subtopics.
- **Markdown Support:** Renders rich text using `react-markdown` with GFM support.
- **Responsive Sidebar:** Collapsible and mobile-friendly navigation.
- **Search & Filtering:** Real-time filtering of courses and topics.
- **Admin Dashboard:** Read-only view of user data.

### 🌟 Advanced Features (Bonuses Implemented)

- **🎨 Custom Markdown Styling:** Support for **Syntax Highlighting** (Neon theme), **Tables**, and GitHub-style **Callouts** (Alerts).
- **💾 LocalStorage Persistence:** Progress tracking and created courses persist after refresh.
- **📊 Progress Tracking:** Dynamic progress bars at both Course and Topic levels.
- **🔗 Deep Linking:** Shareable URLs (`?course=ID&topic=ID`).
- **⌨️ Accessibility (A11y):** Full Keyboard navigation (Arrow keys, Tab), Focus rings, and ARIA labels.
- **✏️ Course Creator:** A full UI to Create and Edit courses with dynamic form arrays.
- **📥 Import/Export:** Ability to export course data to JSON and import it back.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Custom Configuration)
- **Routing:** React Router DOM v6
- **Markdown:** `react-markdown`, `rehype-highlight`, `remark-gfm`
- **Icons:** Heroicons (via SVG)

---

## 🚀 Setup & Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/course-explorer.git](https://github.com/YOUR_USERNAME/course-explorer.git)
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

## 📂 Folder Structure
