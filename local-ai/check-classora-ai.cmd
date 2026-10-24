@echo off
title Classora AI connection check
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is missing. Install Node.js 22 or later from https://nodejs.org/
  pause
  exit /b 1
)
node check-classora-ai.mjs
pause
