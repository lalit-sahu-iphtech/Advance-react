# React Lazy Loading & Code Splitting Practice 🚀

A complete React practice project to understand **Lazy Loading**, **Code Splitting**, **React.lazy()**, **Suspense**, and React performance optimization techniques.

---

# 📚 Topics Covered

- What is Lazy Loading?
- Why Lazy Loading?
- Code Splitting
- React.lazy()
- Suspense
- Fallback Loader
- Route Based Lazy Loading
- Component Based Lazy Loading
- Performance Benefits

---

# 📁 Project Structure

```
src
│
├── components
│   └── Loader.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Students.jsx
│   ├── Products.jsx
│   └── Chart.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📦 Installation

Create React Application:

```bash
npm create vite@latest Lazy-Loading
```

Move into project:

```bash
cd Lazy-Loading
```

Install dependencies:

```bash
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

Run Project:

```bash
npm run dev
```

---

# 🚀 What is Lazy Loading?

Lazy Loading means loading components only when they are required instead of loading all components during application startup.

## Normal Loading

```
Application Start

        |
        |
Load All Components

        |
        |
Show Home Page
```

## Lazy Loading

```
Application Start

        |
        |
Load Only Home Component

        |
        |
User Opens Dashboard

        |
        |
Load Dashboard Component
```

---

# Why Lazy Loading?

Without Lazy Loading:

- Large JavaScript bundle
- Slow initial loading
- More memory usage
- Poor user experience

With Lazy Loading:

- Faster application startup
- Smaller bundle size
- Better performance
- Improved user experience

---

# Code Splitting

Code Splitting means dividing a large JavaScript bundle into smaller chunks.

## Without Code Splitting

```
main.js

--------------------
Home
Dashboard
Students
Products
Profile
Settings
--------------------
```

Everything loads together.

---

## With Code Splitting

```
main.js

dashboard.chunk.js

students.chunk.js

products.chunk.js
```

Only required files are loaded.

---

# React.lazy()

`React.lazy()` is used to dynamically import components.

## Normal Import

```jsx
import Dashboard from "./Dashboard";
```

Component immediately load hota hai.

---

## Lazy Import

```jsx
import { lazy } from "react";

const Dashboard = lazy(
    () => import("./Dashboard")
);
```

Component only when required load hota hai.

---

# Suspense

Suspense provides a fallback UI while lazy components are loading.

Example:

```jsx
import { Suspense } from "react";

<Suspense fallback={<Loader />}>

    <Dashboard />

</Suspense>
```

---

# Fallback Loader

Fallback wo UI hoti hai jo component load hone ke time show hoti hai.

Flow:

```
User Opens Page

        |

Component Loading

        |

Show Loader Spinner

        |

Component Loaded

        |

Display UI
```

---

# Reusable Loader Component

## Loader.jsx

```jsx
function Loader(){

return(

<div className="loader">

<h2>
Loading...
</h2>

</div>

)

}

export default Loader;
```

---

# Route Based Lazy Loading

Route level components ko lazy load karna.

Example:

```
/dashboard

        |
        |
Load Dashboard Component


/students

        |
        |
Load Students Component


/products

        |
        |
Load Products Component
```

Example:

```jsx
import { lazy } from "react";


const Dashboard = lazy(
    ()=> import("./pages/Dashboard")
);


const Students = lazy(
    ()=> import("./pages/Students")
);


const Products = lazy(
    ()=> import("./pages/Products")
);
```

---

# Component Based Lazy Loading

Kisi individual component ko bhi lazy load kar sakte hain.

Example:

```
Dashboard

    |
    |
    Chart Component
```

Chart tabhi load hoga jab Dashboard open hoga.


Example:

```jsx
const Chart = lazy(
    ()=> import("./Chart")
);
```

---

# Practice Implementation

This project implements:

## 1. Lazy Load Dashboard

Dashboard only when user visits:

```
/dashboard
```

load hota hai.

---

## 2. Lazy Load Student Module

Students component:

```
/students
```

par load hota hai.

---

## 3. Lazy Load Product Module

Products component:

```
/products
```

par load hota hai.

---

## 4. Reusable Loader Component

Created:

```
components/Loader.jsx
```

Used with:

```jsx
<Suspense fallback={<Loader />}>
```

---

# App Flow

```
Application Start

        |
        |
Load Home Component

        |
        |
User Opens Dashboard

        |
        |
Download Dashboard Chunk

        |
        |
Dashboard Render

        |
        |
Download Chart Component

        |
        |
Chart Render
```

---

# Routes

| Route | Component | Loading Type |
|------|-----------|--------------|
| `/` | Home | Normal |
| `/dashboard` | Dashboard | Lazy Loaded |
| `/students` | Students | Lazy Loaded |
| `/products` | Products | Lazy Loaded |

---

# Performance Benefits

| Without Lazy Loading | With Lazy Loading |
|---|---|
| All components load initially | Components load when required |
| Large bundle size | Smaller bundle size |
| Slow first load | Faster first load |
| More memory usage | Less memory usage |
| Poor performance | Better performance |

---

# Technologies Used

- React
- React Router DOM
- JavaScript ES6+
- Vite
- CSS3

---

# React APIs Used

## lazy()

Dynamic import ke liye use hota hai.

```jsx
lazy(()=>import("./Component"))
```

---

## Suspense

Loading state show karne ke liye.

```jsx
<Suspense fallback={<Loader />}>
    <Component />
</Suspense>
```

---

# Practice Completed ✅

- ✅ React.lazy()
- ✅ Suspense
- ✅ Fallback Loader
- ✅ Reusable Loader Component
- ✅ Route Based Lazy Loading
- ✅ Component Based Lazy Loading
- ✅ Lazy Dashboard Module
- ✅ Lazy Student Module
- ✅ Lazy Product Module
- ✅ Loading Spinner
- ✅ Code Splitting
- ✅ Performance Optimization

---

# Learning Outcome

After completing this practice:

- React components ko lazy load kar sakte hain.
- Application performance improve kar sakte hain.
- Large applications me code splitting implement kar sakte hain.
- Suspense aur fallback loaders handle kar sakte hain.
- Route level aur component level optimization kar sakte hain.

---

# Author


React Lazy Loading & Code Splitting Practice Project

Created for learning React performance optimization and modern React development patterns.