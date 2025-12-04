const fs = require("fs");

function detect() {
  if (fs.existsSync("package.json")) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

    // Detect Vite
    if (pkg.scripts?.dev?.includes("vite")) return "vite";

    // Detect Next.js
    if (pkg.dependencies?.next) return "next";

    // Detect Express
    if (pkg.dependencies?.express) return "express";

    // Generic Node project
    if (pkg.scripts?.start || pkg.scripts?.dev) return "node";

    return "node";
  }

  return "unknown";
}

console.log(detect());
