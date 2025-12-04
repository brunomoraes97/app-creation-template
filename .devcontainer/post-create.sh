#!/bin/bash

echo "[Universal Template] Detecting stack and installing dependencies..."

STACK=$(node .devcontainer/detect-stack.js)
echo "Detected stack: $STACK"

if [ -f package.json ]; then
  echo "[Universal Template] Installing Node dependencies..."
  npm install --silent || true
fi
