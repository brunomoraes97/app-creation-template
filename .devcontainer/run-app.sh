#!/bin/bash

echo "[Universal Template] Starting auto-run script..."

STACK=$(node .devcontainer/detect-stack.js)
echo "Stack detected: $STACK"

if [ "$STACK" = "vite" ]; then
  npm run dev
  exit
fi

if [ "$STACK" = "next" ]; then
  npm run dev
  exit
fi

if [ "$STACK" = "express" ]; then
  node index.js || node server.js || node app.js
  exit
fi

if [ "$STACK" = "node" ]; then
  npm run dev || npm start || node index.js || node app.js
  exit
fi

echo "[Universal Template] No known stack detected."
