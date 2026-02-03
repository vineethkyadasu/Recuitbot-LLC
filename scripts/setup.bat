@echo off
echo 🚀 Setting up Recuitbot development environment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

REM Create environment files
echo ⚙️ Setting up environment files...

REM Frontend .env
if not exist .env (
    copy env.example .env
    echo ✅ Created .env file for frontend
) else (
    echo ⚠️ .env file already exists, skipping...
)

REM Backend .env
if not exist backend\.env (
    copy backend\env.example backend\.env
    echo ✅ Created backend\.env file
) else (
    echo ⚠️ backend\.env file already exists, skipping...
)

REM Create necessary directories
echo 📁 Creating necessary directories...
if not exist public\images mkdir public\images
if not exist backend\logs mkdir backend\logs

REM Build applications
echo 🔨 Building applications...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)

cd backend
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Backend build failed
    pause
    exit /b 1
)
cd ..

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Start MongoDB (if not already running):
echo    docker run -d -p 27017:27017 --name mongodb mongo:6.0
echo.
echo 2. Start the development servers:
echo    npm run dev:full
echo.
echo 3. Access the application:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo    Admin:    http://localhost:3000/admin
echo.
echo 4. Run tests:
echo    npm run test
echo    npm run backend:test
echo.
echo Happy coding! 🚀
pause
