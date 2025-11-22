# Job Application Tracker

A simple, responsive React app to manage and track job applications.  
Built with beginner-friendly React patterns and deployed via Netlify.

## 🔧 Features

- ✅ Add new job applications (title, company, status, date applied)
- ✏️ Edit job entries inline
- 🗑️ Delete entries
- 🔍 Filter by application status
- 📅 Sort by date, title, or status (ascending/descending)
- 💾 Persists data in `localStorage`
- 📱 Clean UI styled with vanilla CSS

## 🚀 Live Demo

👉 [View live on Netlify](https://shalinib-js.github.io/JobTracker-App/)

## 🖼️ Screenshots

| Main View | Edit Mode |
|-----------|-----------|
| ![Main view](screenshots/main.png) | ![Edit mode](screenshots/edit.png) |


## 🛠️ Tech Stack

- React (via Create React App)
- HTML + CSS
- JavaScript (ES6+)
- Netlify (for deployment)

## 🗂️ Project Structure

<pre>
mini-react-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── screenshots/
│   ├── main.png
│   └── edit.png
├── src/
│   ├── App.js
│   ├── JobForm.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
</pre>

## 📦 Setup Instructions

Clone the repo and run the app locally:

```bash
git clone https://github.com/moeaoun1/job-application-tracker.git
cd job-application-tracker
npm install
npm start
