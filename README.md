# 📚 Book Finder App

A modern and responsive **Book Finder App** built with **React** and **Tailwind CSS**.  
This app integrates with the **Open Library API** to allow users to search for books by title, author, or ISBN.  
It also supports **dark mode**, **pagination**, **loading skeletons**, and a **book details modal**.  

---

## 🚀 Features
- 🔍 Search books by **title, author, or ISBN**  
- 📖 View book details in a **modal popup**  
- 🌙 **Dark mode toggle** for a comfortable experience  
- ⏳ **Loading skeletons** for smooth UX while fetching data  
- 📄 **Pagination** to handle large search results  
- 🎨 Attractive **UI with gradients and animations**  
- 📱 Fully **responsive** for mobile, tablet, and desktop  

---

## 🛠️ Tech Stack
- **React** (with Vite for fast build & dev server)  
- **Tailwind CSS** (utility-first styling)  
- **Open Library API** (book search + cover images)  
- **React Hooks** (`useState`, `useEffect`) for state management  

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/book-finder-app.git
cd book-finder-app
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Start the development server
```bash
npm run dev
App will run at:
http://localhost:5173
```
### 4️⃣ Build for production
```bash
npm run build
```
### 🌐 API Reference
```bash
https://openlibrary.org/search.json?q={query}&page={page}&limit={limit}
```
### 📱 Responsive Design
```bash
1.Works on desktop, tablet, and mobile
2.Supports both light mode and dark mode
3.Uses modern gradient backgrounds and animations
```
### 🎯 How It Works
```bash
1.User enters a query in the search bar.
2.The app calls the Open Library API with pagination.
3.Results show up in book cards with title, author, and cover image.
4.Clicking a book opens a details modal.
5.User can toggle between light & dark mode.
```




















