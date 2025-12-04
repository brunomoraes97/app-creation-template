const fs = require("fs");

function detect() {
  if (fs.existsSync("docker-compose.yml")) return "docker";
  if (fs.existsSync("Dockerfile")) return "dockerfile";

  if (fs.existsSync("package.json")) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

    // Detecta Vite
    if (pkg.scripts?.dev?.includes("vite")) return "vite";

    // Detecta Next.js
    if (pkg.dependencies?.next) return "next";

    // Detecta Express
    if (pkg.dependencies?.express) return "express";

    // Detecta Node genérico
    if (pkg.scripts?.start || pkg.scripts?.dev) return "node";

    return "node";
  }

  return "unknown";
}

console.log(detect());

