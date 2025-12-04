# 🚀 Universal App Template

This repository template allows you to create **any kind of JavaScript-based project** and run it automatically inside **GitHub Codespaces — with zero terminal usage**.

Supported stacks:

- Node.js  
- Express  
- React (Vite)  
- Next.js  
- Docker / Docker Compose  

The template automatically detects the project type and launches it with the correct command.

---

## ✅ How to use

1. Click **Use This Template → Create new repository**
2. Open the new repository in **GitHub Codespaces**
3. Add or paste your project files into the workspace
4. Click **Run App** (from the Run & Debug panel)
5. The app will start automatically, and the preview will open 🎉

No terminal required.

---

## 🧠 Automatic stack detection

The template detects your project by scanning the repository structure:

| Detected Type          | Trigger                                      | Action                                   |
|------------------------|-----------------------------------------------|-------------------------------------------|
| **Vite (React)**       | `"dev"` script contains `"vite"`              | `npm run dev`                             |
| **Next.js**            | `"next"` in dependencies                      | `npm run dev`                             |
| **Express**            | `"express"` in dependencies                   | `node index.js` / `server.js` / `app.js`  |
| **Generic Node**       | Any `"start"` or `"dev"` script               | `npm run dev` or `npm start`              |
| **Docker Compose**     | `docker-compose.yml`                          | `docker-compose up --build`               |
| **Dockerfile**         | `Dockerfile`                                  | `docker build` + `docker run`             |

---

## 🖥️ What your manager will see

- No terminal  
- No environment setup  
- One single button: **Run App**  
- Auto-installation of dependencies  
- Auto-detection of stack  
- Auto-preview in the browser  

This template is ideal for fast prototyping, AI-generated apps, or collaborative “vibe coding” sessions in Codespaces.

---

## 📂 Files included

- `.devcontainer/` with:
  - Automatic stack detection  
  - Automatic install  
  - Automatic run script  
  - Docker support  
- `.vscode/launch.json` with **Run App** button  
- This README  

---
