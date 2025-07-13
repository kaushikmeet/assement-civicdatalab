# 📊 Dataset Explorer

A modern, responsive data listing application built with **Next.js 13+**, **Tailwind CSS**, and **Lucide Icons**. It allows users to explore datasets with powerful filters, sorting, pagination, and responsive card/grid views.

---

## 🚀 Features

- 🔍 Full-text search support
- 🧭 Filters by **Geography**, **Sectors**, **Tags**, and **Formats**
- 📥 Sort by recency and order
- 🧱 Toggle between **Grid** and **List** views
- 📄 Pagination with entries-per-page selector
- 📱 Fully responsive for mobile & desktop
- 🧹 Filter reset support
- ⚡ Powered by dynamic API (`fetchDatasets`)

---

## 🛠️ Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📁 Folder Structure

```bash
├── app/
│   ├── components/
│   │   ├── DatasetCard.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── Pagination.tsx
│   │   ├── SortDropdown.tsx
│   │   ├── ViewToggle.tsx
│   └── utils/
│       └── fetchDatasets.ts
├── public/assets/
│   └── cdl_logo.png
├── styles/
│   └── globals.css
├── page.tsx
├── layout.tsx
└── README.md
```

---

## 🧪 Getting Started

### 1. 📦 Install dependencies
```bash
yarn install
# or
npm install
```

### 2. 🏃 Run the development server
```bash
yarn dev
# or
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. 🔌 API Integration
Make sure your `fetchDatasets.ts` function is configured to hit the correct API endpoint.

---

## 📸 Screenshots

| Grid View | List View |
|-----------|-----------|
| ![Grid](public/screens/grid-view.png) | ![List](public/screens/list-view.png) |

---

## 🤝 Contributing
Pull requests and suggestions are welcome! Please open an issue first for any feature requests.

---

## 📄 License
MIT © 2025 CivicDataLab
