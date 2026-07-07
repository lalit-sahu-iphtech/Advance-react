# React Router Practice 🚀

A complete React Router practice project covering all the fundamental routing concepts in React.

---

# 📚 Topics Covered

- Introduction to React Router
- Installing React Router
- BrowserRouter
- Routes
- Route
- Link
- NavLink
- Navigate
- Nested Routes
- Dynamic Routes
- URL Parameters (`useParams`)
- Query Parameters (`useSearchParams`)
- Programmatic Navigation (`useNavigate`)
- Route Layouts
- Outlet
- Protected Routes
- 404 (Not Found) Page

---

# 📁 Folder Structure

```
src
│
├── components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Students.jsx
│   ├── StudentDetails.jsx
│   ├── Products.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── Settings.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into project directory

```bash
cd react-router-practice
```

Install dependencies

```bash
npm install
```

Install React Router

```bash
npm install react-router-dom
```

Run the project

```bash
npm run dev
```

---

# 🚀 Routing Structure

```
/

│

├── Home

├── About

├── Contact

├── Students
│      │
│      ├── Student Details (/students/:id)

├── Products
│      │
│      └── Query Parameters

├── Login

├── Dashboard (Protected)
│      │
│      ├── Profile
│      └── Settings

└── 404 Page
```

---

# 🛣 Available Routes

| URL | Component |
|------|-----------|
| / | Home |
| /about | About |
| /contact | Contact |
| /students | Students |
| /students/:id | Student Details |
| /products | Products |
| /products?category=mobile | Query Parameters |
| /login | Login |
| /dashboard | Dashboard |
| /dashboard/profile | Profile |
| /dashboard/settings | Settings |
| * | 404 Page |

---

# 📖 Concepts Used

## BrowserRouter

Wraps the entire React application and enables routing.

```jsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

---

## Routes

Acts as a container for all Route components.

```jsx
<Routes>

<Route />

</Routes>
```

---

## Route

Maps a URL to a React Component.

```jsx
<Route path="/about" element={<About />} />
```

---

## Link

Used for navigation without page reload.

```jsx
<Link to="/about">
About
</Link>
```

---

## NavLink

Same as Link but automatically adds active styling.

```jsx
<NavLink to="/about">
About
</NavLink>
```

---

## Navigate

Redirects users to another page.

```jsx
<Navigate to="/login" />
```

---

## Nested Routes

Child routes rendered inside parent route.

```jsx
<Route path="dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
</Route>
```

---

## Outlet

Displays child routes inside parent component.

```jsx
<Outlet />
```

---

## Dynamic Routes

Dynamic URL using parameters.

```jsx
<Route path="students/:id" element={<StudentDetails />} />
```

---

## useParams()

Reads URL parameters.

```jsx
const { id } = useParams();
```

---

## useSearchParams()

Reads query parameters.

```jsx
const [searchParams] = useSearchParams();

const category = searchParams.get("category");
```

Example

```
/products?category=mobile
```

---

## useNavigate()

Navigate programmatically.

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

---

## Protected Routes

Restricts access to authenticated users.

```jsx
<ProtectedRoute>

<Dashboard />

</ProtectedRoute>
```

---

## 404 Page

Handles invalid URLs.

```jsx
<Route path="*" element={<NotFound />} />
```

---

# 🧩 Components

### Layout

Responsible for rendering

- Navbar
- Outlet

---

### Navbar

Navigation using

- Home
- About
- Contact
- Students
- Products
- Dashboard
- Login

Implemented using

```jsx
NavLink
```

---

### ProtectedRoute

Protects Dashboard routes.

If user is not logged in

```
↓

Redirect to Login Page
```

---

# 📄 Pages

### Home

Displays homepage.

---

### About

Displays about information.

---

### Contact

Displays contact page.

---

### Students

Displays list of students.

Uses

```jsx
Link
```

to navigate to Student Details.

---

### Student Details

Reads student id using

```jsx
useParams()
```

Example

```
/students/5
```

Output

```
Student ID : 5
```

---

### Products

Uses query parameters.

Example

```
/products?category=mobile
```

Reads value using

```jsx
useSearchParams()
```

---

### Login

Uses

```jsx
useNavigate()
```

to redirect to Dashboard.

---

### Dashboard

Protected Page.

Contains nested routes

- Profile
- Settings

Uses

```jsx
Outlet
```

---

### Profile

Nested Route

```
/dashboard/profile
```

---

### Settings

Nested Route

```
/dashboard/settings
```

---

### NotFound

Handles invalid routes.

Example

```
/anything
```

Displays

```
404 Page Not Found
```

---

# 🎯 React Router Hooks Used

| Hook | Purpose |
|------|----------|
| useNavigate | Programmatic Navigation |
| useParams | Read URL Parameters |
| useSearchParams | Read Query Parameters |

---

# 🎯 React Router Components Used

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- Navigate
- Outlet

---

# 💻 Skills Learned

- Client-side Routing
- Navigation without Reload
- Nested Routing
- Layout Routes
- Protected Routes
- Dynamic Routes
- Query Parameters
- Route Parameters
- Programmatic Navigation
- Handling Invalid URLs
- React Router Hooks
- Reusable Layout Components

---

# 🛠 Technologies Used

- React
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Vite

---

# 📌 Practice Completed

- ✅ Home Route
- ✅ About Route
- ✅ Contact Route
- ✅ Students Route
- ✅ Student Details Route
- ✅ Dynamic Routing
- ✅ Products Route
- ✅ Query Parameters
- ✅ Login Route
- ✅ Protected Dashboard
- ✅ Nested Routes
- ✅ Profile Route
- ✅ Settings Route
- ✅ 404 Not Found Page
- ✅ Layout Route
- ✅ Navigation using Link & NavLink
- ✅ Programmatic Navigation
- ✅ React Router Hooks

---

# 👨‍💻 Author

**React Router Practice Project**

Created for learning and practicing React Router fundamentals, routing patterns, and navigation concepts.