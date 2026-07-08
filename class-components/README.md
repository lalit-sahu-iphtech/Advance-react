# React Class Components Practice 🚀

A complete React practice project to understand **Class Components**, **State Management**, **Props**, **Lifecycle Methods**, and conversion of Class Components into Functional Components using Hooks.

---

# 📚 Topics Covered

- Introduction to React Components
- What are Class Components?
- Creating Class Components
- Extending React.Component
- render() Method
- Props in Class Components
- this.props
- State in Class Components
- this.state
- setState()
- Component Lifecycle Methods
- Mounting Phase
- Updating Phase
- Unmounting Phase
- Class Component vs Functional Component
- Converting Class Component into Functional Component using Hooks

---

# 📁 Project Structure

```
src
│
├── components
│
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── StudentCard.jsx
│   ├── EmployeeCard.jsx
│   └── ProductCard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📦 Installation

Create React Application:

```bash
npm create vite@latest class-components
```

Move into project:

```bash
cd class-components
```

Install dependencies:

```bash
npm install
```

Run Application:

```bash
npm run dev
```

---

# 🚀 What are Class Components?

Class Component ek JavaScript class hoti hai jo `React.Component` ko extend karti hai.

Class component UI return karne ke liye `render()` method ka use karti hai.

---

# Creating Class Component

## Syntax

```jsx
import React from "react";


class ComponentName extends React.Component{


render(){

return(

<h1>
Component UI
</h1>

)

}


}


export default ComponentName;
```

---

# Example Class Component

## Header.jsx

```jsx
import React from "react";


class Header extends React.Component{


render(){

return(

<header>

<h1>
React Website
</h1>

</header>

)

}


}


export default Header;
```

---

# render() Method

`render()` class component ka required method hai.

Ye component ka JSX return karta hai.

Example:

```jsx
render(){

return(

<h1>
Hello React
</h1>

)

}
```

---

# Props in Class Components

Props ka use parent component se child component me data send karne ke liye hota hai.

Class component me props access karne ke liye:

```jsx
this.props
```

use hota hai.

---

## Example

Parent Component:

```jsx
<Student name="Rahul"/>
```

Child Component:

```jsx
class Student extends React.Component{


render(){

return(

<h2>
{this.props.name}
</h2>

)

}


}
```

Output:

```
Rahul
```

---

# State in Class Components

State component ka internal data hota hai.

Class component me state:

```jsx
this.state
```

se create hoti hai.

---

## Example

```jsx
class Counter extends React.Component{


constructor(){

super();


this.state={

count:0

}


}


render(){

return(

<h1>

{this.state.count}

</h1>

)

}


}
```

---

# setState()

State ko update karne ke liye `setState()` method use hota hai.

Example:

```jsx
this.setState({

count:this.state.count+1

})
```

---

# Component Lifecycle

Class components me lifecycle methods available hoti hain.

Component lifecycle ke 3 phases hote hain:

```
Mounting

    ↓

Updating

    ↓

Unmounting
```

---

# 1. Mounting Phase

Jab component first time DOM me render hota hai.

Method:

```jsx
componentDidMount()
```

Example:

```jsx
componentDidMount(){

console.log(
"Component Mounted"
)

}
```

---

# 2. Updating Phase

Jab state ya props change hote hain.

Method:

```jsx
componentDidUpdate()
```

Example:

```jsx
componentDidUpdate(){

console.log(
"Component Updated"
)

}
```

---

# 3. Unmounting Phase

Jab component remove hota hai.

Method:

```jsx
componentWillUnmount()
```

Example:

```jsx
componentWillUnmount(){

console.log(
"Component Removed"
)

}
```

---

# Practice Components Created

## 1. Header Component

Displays website header.

---

## 2. Navbar Component

Navigation menu component.

---

## 3. Footer Component

Displays website footer.

---

## 4. Student Card Component

Displays student information using props.

Example:

```jsx
<StudentCard
name="Rahul"
course="React"
/>
```

---

## 5. Employee Card Component

Displays employee details.

Example:

```jsx
<EmployeeCard
name="Amit"
role="Developer"
/>
```

---

## 6. Product Card Component

Displays product information.

Example:

```jsx
<ProductCard
title="Laptop"
price="50000"
/>
```

---

# App.jsx Practice

```jsx
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import StudentCard from "./components/StudentCard";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";


class App extends React.Component{


render(){

return(

<>


<Header/>


<Navbar/>


<StudentCard
name="Rahul"
course="React"
/>


<EmployeeCard
name="Amit"
role="Developer"
/>


<ProductCard
title="Laptop"
price="50000"
/>


<Footer/>


</>

)

}


}


export default App;
```

---

# Class Component vs Functional Component

| Class Component | Functional Component |
|---|---|
| Class based | Function based |
| Uses render() | Direct return JSX |
| Uses this.props | Uses props |
| Uses this.state | Uses useState |
| Uses lifecycle methods | Uses useEffect |
| More code | Less code |

---

# Convert Class Component into Functional Component

## Class Counter Component

```jsx
class Counter extends React.Component{


constructor(){

super();


this.state={

count:0

}


}


render(){

return(

<>

<h1>
{this.state.count}
</h1>


<button

onClick={()=>this.setState({

count:this.state.count+1

})}

>

Increase

</button>


</>

)

}


}
```

---

# Converted Functional Component using Hooks

```jsx
import {useState} from "react";


function Counter(){


const [count,setCount]=useState(0);



return(

<>


<h1>

{count}

</h1>


<button

onClick={()=>setCount(count+1)}

>

Increase

</button>


</>

)


}


export default Counter;
```

---

# Skills Learned

- ✅ Creating Class Components
- ✅ JSX Rendering
- ✅ Passing Props
- ✅ Using this.props
- ✅ Managing State
- ✅ Using this.state
- ✅ Updating State with setState()
- ✅ Component Lifecycle Methods
- ✅ Creating Reusable Components
- ✅ Understanding Class vs Functional Components
- ✅ Converting Class Components into Functional Components

---

# Technologies Used

- React
- JavaScript ES6+
- Vite
- CSS3

---

# Practice Completed ✅

- ✅ Header Class Component
- ✅ Navbar Class Component
- ✅ Footer Class Component
- ✅ Student Card Class Component
- ✅ Employee Card Class Component
- ✅ Product Card Class Component
- ✅ Props Practice
- ✅ State Practice
- ✅ setState Practice
- ✅ Lifecycle Methods Practice
- ✅ Class to Functional Conversion

---

# Author

React Class Components Practice Project

Created for learning React component architecture, class-based components, props, state management, and lifecycle methods.