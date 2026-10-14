@echo off
title Classora Local AI
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js not installed. Install Node.js 22 or later from https://nodejs.org/
  pause
  exit /b 1
)
echo Starting Classora AI gateway. Keep Ollama running.
node server.mjs
echo.
echo The Classora AI gateway stopped.
pause
