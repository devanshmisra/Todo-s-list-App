<div align="center">
  <h1>✨ TaskFlow - Premium To-Do Application</h1>
  <p>A beautifully designed, feature-rich To-Do List application featuring seamless Light/Dark mode transitions, drag-and-drop reordering, fluid animations, and robust local storage persistence.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

<br />

## 🚀 Overview

TaskFlow is a premium, industry-ready task management web application. Built from the ground up with **React** and **Vite**, it focuses heavily on user experience, offering a highly responsive, animated, and minimalist interface. It completely shifts away from standard boilerplate UIs, instead utilizing custom-crafted CSS variables and glassmorphism to deliver a visually striking experience.

## ✨ Key Features

- 🌓 **Dynamic Theming:** Seamlessly toggle between a clean, bright Light Mode and a deep, immersive Dark Mode with electric violet neon accents.
- 🤏 **Drag and Drop:** Reorder your tasks effortlessly with full drag-and-drop support powered by `@dnd-kit`.
- 💫 **Fluid Animations:** Smooth entry, exit, and reordering animations powered by `framer-motion`.
- 🏷️ **Categories & Due Dates:** Organize your tasks efficiently with colored category tags (Work, Personal, Urgent, Other) and deadline tracking.
- ✏️ **Inline Editing:** Double-click any task to quickly edit its content on the fly.
- 🔔 **Toast Notifications:** Unobtrusive, elegant popup notifications for user actions via `react-hot-toast`.
- 🔍 **Filtering:** Quickly filter tasks by "All", "Active", and "Completed".
- 💾 **Data Persistence:** Never lose a task. Your to-do list is automatically saved to your browser's `localStorage` and restored instantly upon reload.
- 🎨 **Premium Aesthetics:** Features glassmorphism, dynamic gradient backgrounds, and carefully tuned hover animations.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS3 (Custom CSS Variables & Flexbox)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Drag & Drop:** [@dnd-kit](https://dndkit.com/)
- **Notifications:** [react-hot-toast](https://react-hot-toast.com/)
- **State Management:** Custom React Hooks (`useTodos`)

## 📂 Project Structure

```text
📦 Todo-s-list-App
 ┣ 📂 public/            # Static public assets (icons, etc.)
 ┣ 📂 src/
 ┃ ┣ 📂 assets/          # Project assets (images, SVGs)
 ┃ ┣ 📂 components/      # Modular UI components
 ┃ ┃ ┣ 📜 Header.jsx
 ┃ ┃ ┣ 📜 TodoInput.jsx
 ┃ ┃ ┣ 📜 TodoList.jsx
 ┃ ┃ ┗ 📜 TodoItem.jsx
 ┃ ┣ 📂 hooks/           # Custom React Hooks
 ┃ ┃ ┗ 📜 useTodos.js    # Global state management
 ┃ ┣ 📜 App.jsx          # Main application wrapper
 ┃ ┣ 📜 index.css        # Global CSS, styling, and theme variables
 ┃ ┗ 📜 main.jsx         # React application entry point
 ┣ 📜 index.html         # Main HTML template
 ┣ 📜 package.json       # Project dependencies & scripts
 ┣ 📜 vite.config.js     # Vite configuration
 ┗ 📜 README.md          # Project documentation
```

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devanshmisra/Todo-s-list-App.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Todo-s-list-App
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` (or the port specified in your terminal) to see the app in action!

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` directory containing the minified and optimized static files, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
