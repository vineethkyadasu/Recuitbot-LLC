#!/bin/bash

# Recuitbot Setup Script
echo "🚀 Setting up Recuitbot development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if MongoDB is running
if ! command -v mongosh &> /dev/null; then
    echo "⚠️  MongoDB shell not found. Please install MongoDB or use Docker."
    echo "   Docker: docker run -d -p 27017:27017 --name mongodb mongo:6.0"
else
    if mongosh --eval "db.runCommand({ping: 1})" &> /dev/null; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB is not running. Please start MongoDB or use Docker."
        echo "   Docker: docker run -d -p 27017:27017 --name mongodb mongo:6.0"
    fi
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

cd ..

# Create environment files
echo "⚙️  Setting up environment files..."

# Frontend .env
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Created .env file for frontend"
else
    echo "⚠️  .env file already exists, skipping..."
fi

# Backend .env
if [ ! -f backend/.env ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env file"
else
    echo "⚠️  backend/.env file already exists, skipping..."
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p public/images
mkdir -p backend/logs

# Build applications
echo "🔨 Building applications..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

cd backend
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Backend build failed"
    exit 1
fi

cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Start MongoDB (if not already running):"
echo "   docker run -d -p 27017:27017 --name mongodb mongo:6.0"
echo ""
echo "2. Start the development servers:"
echo "   npm run dev:full"
echo ""
echo "3. Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo "   Admin:    http://localhost:3000/admin"
echo ""
echo "4. Run tests:"
echo "   npm run test"
echo "   npm run backend:test"
echo ""
echo "Happy coding! 🚀"
