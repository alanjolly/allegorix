# Allegorix Cybersecurity Platform

This project is built with React, Tailwind CSS, and Vite.

## 🚀 How to Deploy to GitHub Pages

Since this is a React application, we need to build it before deploying. I have configured the `gh-pages` script to handle this automatically.

### Step 1: Initialize Git (if you haven't)
Open your terminal in this project folder:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create a Repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new).
2. Name your repository (e.g., `allegorix-cybersecurity`).
3. **Important:** Do not add a README, .gitignore, or License during creation.

### Step 3: Link and Push
Run these commands (replace `YOUR_USERNAME` and `REPO_NAME`):
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Configure & Deploy
1. Open `package.json` and edit the `"homepage"` field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
   ```
2. Run the deploy script:
   ```bash
   npm install
   npm run deploy
   ```
   *This command builds your app to the `dist` folder and pushes it to a special `gh-pages` branch.*

### Step 5: Activate Pages
1. Go to your GitHub Repository > **Settings** > **Pages**.
2. Under "Build and deployment" > "Source", select **Deploy from a branch**.
3. Under "Branch", ensure **gh-pages** is selected (it should be automatic).
4. Save. Your site will be live in a few minutes!

## 🛠️ Local Development

To run the project locally:
```bash
npm install
npm run dev
```
