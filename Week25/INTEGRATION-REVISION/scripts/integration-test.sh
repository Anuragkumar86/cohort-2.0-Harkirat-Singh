#!/usr/bin/env bash
set -e

echo "🚀 Starting database..."
docker compose up -d

echo "🟡 Waiting for database to be ready..."
bash ./scripts/wait-for-it.sh localhost:5433 --timeout=60

echo "📦 Generating Prisma client..."
npx prisma generate

echo "🗄️ Running migrations..."
npx prisma migrate deploy

echo "🧪 Running tests..."
npm test

echo "🧹 Stopping containers..."
docker compose down -v
