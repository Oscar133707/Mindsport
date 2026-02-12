#!/bin/bash
# Script to push to GitHub
# Replace YOUR_USERNAME with your actual GitHub username

echo "Setting up GitHub remote..."
git remote add origin https://github.com/YOUR_USERNAME/mindsport-ab.git
git branch -M main
git push -u origin main

echo "Done! Your repository is now on GitHub."





