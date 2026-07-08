# React Forms Practice 🚀

A complete React practice project to understand **Forms in React**, **Controlled Components**, **Form State Management**, **Multiple Inputs Handling**, **Dynamic Forms**, **Nested Form Data**, and **Form Submission**.

---

# 📚 Topics Covered

- Forms in React
- Controlled Components
- Form State Management
- Handling Multiple Inputs
- Dynamic Forms
- Nested Form Data
- Form Submission
- Reset Form
- Handling User Input
- Managing Form State

---

# 📁 Project Structure

```
src
│
├── components
│   ├── LoginForm.jsx
│   ├── RegistrationForm.jsx
│   ├── ContactForm.jsx
│   ├── StudentRegistration.jsx
│   └── EmployeeRegistration.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📦 Installation

Create React Application:

```bash
npm create vite@latest react-forms
```

Move into project:

```bash
cd forms-in-react
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

# 🚀 What are Forms in React?

Forms are used to collect user information and handle user interactions.

Examples:

- Login Form
- Registration Form
- Contact Form
- Student Registration Form
- Employee Registration Form

React forms allow us to manage input values using React state.

---

# HTML Form vs React Form

## Normal HTML Form

```
User Input

    |

Browser Handles Data
```

---

## React Form

```
User Input

    |

React State

    |

Submit

    |

API / Database
```

---

# Controlled Components

## Definition

Controlled Component is a form element whose value is controlled by React state.

React state is the single source of truth.

Example:

```jsx
import { useState } from "react";

function App(){

const [name,setName] = useState("");

return(

<input

value={name}

onChange={(e)=>setName(e.target.value)}

/>

)

}

export default App;
```

---

# Why Use Controlled Components?

Benefits:

- React controls form data
- Easy validation
- Easy form reset
- Easy API integration
- Better control over user input
- Maintainable form logic

---

# Form State Management

Form state management means storing and managing form input values inside React state.

Example:

```jsx
const [formData,setFormData] = useState({

name:"",

email:"",

password:""

});
```

---

# Handling Multiple Inputs

Multiple input fields can be managed using one state object.

Example:

```jsx
function handleChange(e){

setFormData({

...formData,

[e.target.name]:e.target.value

})

}
```

Input Example:

```jsx
<input

name="email"

value={formData.email}

onChange={handleChange}

/>


<input

name="password"

value={formData.password}

onChange={handleChange}

/>
```

---

# Dynamic Forms

## Definition

Dynamic Forms allow users to add or remove form fields during runtime.

Example:

```
Student Form

Name

Subjects

+ Add Subject

Math
Science
English
```

Example:

```jsx
const [subjects,setSubjects] = useState([]);


function addSubject(){

setSubjects([

...subjects,

""

])

}
```

---

# Nested Form Data

## Definition

When form data contains objects inside objects, it is called nested form data.

Example:

```javascript
{
name:"Rahul",

address:{

city:"Delhi",

pincode:"110001"

}

}
```

State:

```jsx
const [employee,setEmployee] = useState({

name:"",

address:{

city:"",

pincode:""

}

});
```

---

# Form Submission

Form submission is handled using the `onSubmit` event.

Example:

```jsx
function handleSubmit(e){

e.preventDefault();

console.log(formData);

}
```

Form:

```jsx
<form onSubmit={handleSubmit}>

<button>

Submit

</button>

</form>
```

---

# Reset Form

Reset form means clearing all input values after submission.

Example:

```jsx
setFormData({

name:"",

email:"",

password:""

});
```

---

# Practice Project

Created Forms:

✅ Login Form  
✅ Registration Form  
✅ Contact Form  
✅ Student Registration Form  
✅ Employee Registration Form  

---

# Login Form

## Fields

```
Email

Password

Login Button
```

## Features

- Controlled Inputs
- Form Submission
- Reset Form
- State Management

---

# Registration Form

## Fields

```
Name

Email

Password

Register Button
```

## Features

- Multiple Input Handling
- Controlled Components
- Form State Management

---

# Contact Form

## Fields

```
Name

Message

Send Button
```

## Features

- Input Handling
- Textarea Handling
- Submit Event

---

# Student Registration Form

## Fields

```
Student Name

Course

Marks

Save Button
```

## Features

- Multiple Inputs
- State Management
- Form Submission

---

# Employee Registration Form

## Fields

```
Employee Name

Role

Address

City

Pincode
```

## Features

- Nested Form Data
- Object State Handling
- Multiple Inputs

---

# Application Flow

```
User Enters Data

        |

onChange Event

        |

Update React State

        |

Submit Form

        |

Process Data

        |

Reset Form
```

---

# React Events Used

## onChange

Used to handle input value changes.

Example:

```jsx
<input

onChange={handleChange}

/>
```

---

## onSubmit

Used to handle form submission.

Example:

```jsx
<form onSubmit={handleSubmit}>

</form>
```

---

# React Hook Used

## useState()

`useState()` is used to store and update form data.

Example:

```jsx
const [form,setForm] = useState({});
```

---

# Skills Learned

- Controlled Components
- Form State Management
- Multiple Input Handling
- Dynamic Forms
- Nested Form Data
- Form Submission
- Reset Form
- Input Handling
- React useState Hook
- User Data Management

---

# Practice Completed ✅

- ✅ Login Form
- ✅ Registration Form
- ✅ Contact Form
- ✅ Student Registration Form
- ✅ Employee Registration Form
- ✅ Controlled Components
- ✅ Multiple Inputs Handling
- ✅ Dynamic Form Concept
- ✅ Nested Data Handling
- ✅ Submit Handling
- ✅ Reset Form

---

# Technologies Used

- React
- JavaScript ES6+
- Vite
- CSS3

---

# Author

React Forms Practice Project

Created for learning React form handling and state management concepts.