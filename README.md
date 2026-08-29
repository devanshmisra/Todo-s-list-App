<div align="center">
  <h1>✨ TaskFlow - Modern To-Do Application</h1>
  <p>A beautifully designed, minimalist To-Do List application featuring seamless Light/Dark mode transitions, dynamic neon accents, and robust local storage persistence.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  </p>
</div>

<br />

## 🚀 Overview

TaskFlow is a premium task management web application. Built from the ground up with **React** and **Vite**, it focuses heavily on user experience, offering a highly responsive, animated, and minimalist interface. It completely shifts away from standard boilerplate UIs, instead utilizing custom-crafted CSS variables to deliver a visually striking experience.

## ✨ Key Features

- 🌓 **Dynamic Theming:** Seamlessly toggle between a clean, bright Light Mode and a deep, immersive Dark Mode with electric violet neon accents.
- 💾 **Data Persistence:** Never lose a task. Your to-do list is automatically saved to your browser's `localStorage` and restored instantly upon reload.
- 🎨 **Premium Aesthetics:** Zero harsh borders. The UI relies on soft drop-shadows, expanding borders on focus, and carefully tuned hover animations.
- ⚡ **Lightning Fast:** Powered by Vite, ensuring instant server starts, lightning-fast Hot Module Replacement (HMR), and a highly optimized production build.
- 🛡️ **Input Validation:** Prevents the submission of empty tasks automatically.
- 📱 **Fully Responsive:** Beautifully adapts to mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS3 (Custom CSS Variables & Flexbox)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Hooks (`useState`, `useEffect`)

## 📂 Project Structure

```text
📦 Todo-s-list-App
 ┣ 📂 public/            # Static public assets (icons, etc.)
 ┣ 📂 src/
 ┃ ┣ 📂 assets/          # Project assets (images, SVGs)
 ┃ ┣ 📜 App.jsx          # Main application component & logic
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

## 🚀 Live Deployment

*[Add your live deployment link here once hosted! (e.g., Vercel, Netlify)]*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
