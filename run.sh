#!/bin/bash

# Exit on any error
set -e

# Install dependencies if needed
npm install

# Build the Next.js app
npm run build

# Start the app
npm start
