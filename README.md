# 🚀 SpaceX Launch Tracker – Home Assignment

This is my implementation of the SpaceX Home Assignment.  
The app fetches launches from the [SpaceX API v5](https://api.spacexdata.com/v5/launches/query) and displays them with responsive cards and pagination.

---

## 🎥 Demo

👉 [Watch the demo video here](https://www.loom.com/share/8b9af26b6ebc429d88a77e30657f86ee)

---

## ✨ Features

- **API-driven pagination**  
  Uses `page` and `limit` from SpaceX API (server-side pagination).  

- **Pagination component**  
  Compact page list with `…`, Previous/Next and Page numbers navigation.  

- **Loading & Error states**  
  Separate components (`Loading.js`, `Error.js`).  

- **Responsive UI**  
  CSS Grid (`auto-fill`, `minmax`), clamped long text, status pills.  

- **Performance**  
  Preloads the first mission patch image for better LCP.  

- **Testing**  
  Pure pagination logic (`buildPageList`) and `formatDate()` helper covered with Jest.  

---

## 🛠️ Tech Stack

- [Next.js 13 (Pages Router)](https://nextjs.org/)  
- React 18  
- CSS Modules  
- Jest (unit tests)  

---

## 📂 Project Structure

```text
.
├── components/
│ ├── Pagination.js
│ ├── Loading.js
│ └── Error.js
├── hooks/
│ └── useLaunches.js
├── pages/
│ ├── index.js
│ ├── _app.js
│ └── _document.js
├── styles/
│ ├── globals.css
│ └── Home.module.css
├── utils/
│   └── formatDate.js
├── __tests__/
│ ├── formatDate.test.js
│ └── Pagination.test.js
├── constants/
│ └── index.js
├── jest.config.cjs
├── jest.setup.js
├── package.json
└── README.md

```

---

## 🚦 How to Run

```bash
# install dependencies
npm install

# run in dev mode
npm run dev

# run tests
npm test

👉 Open http://localhost:3000 in your browser to view the app.
