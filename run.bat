@echo off
setlocal
cd /d "%~dp0"
if errorlevel 1 goto :bad_project_directory

where node >nul 2>&1
if errorlevel 1 goto :missing_node
where npm >nul 2>&1
if errorlevel 1 goto :missing_npm

node -e "const [major, minor] = process.versions.node.split('.').map(Number); process.exit(major < 22 || (major === 22 && minor < 18) ? 1 : 0)" >nul 2>&1
if errorlevel 1 goto :old_node

if not exist "node_modules\vite\bin\vite.js" (
    echo Dependencies are missing. Installing them now...
    call npm install
    if errorlevel 1 goto :install_failed
)

echo Starting Deungbul Jigi. Keep this window open while playing.
call npm run dev -- --open %*
set "EXIT_CODE=%ERRORLEVEL%"
if not "%EXIT_CODE%"=="0" (
    echo.
    echo The development server exited with code %EXIT_CODE%.
    pause
)
exit /b %EXIT_CODE%

:bad_project_directory
echo Could not switch to the project folder.
pause
exit /b 1

:missing_node
echo Node.js 22.18 or later is required. Install Node.js, then run this file again.
pause
exit /b 1

:missing_npm
echo npm was not found. Repair or reinstall Node.js, then run this file again.
pause
exit /b 1

:old_node
echo Node.js 22.18 or later is required by this project. Update Node.js, then run this file again.
pause
exit /b 1

:install_failed
echo Dependency installation failed. Check the npm output above and try again.
pause
exit /b 1
