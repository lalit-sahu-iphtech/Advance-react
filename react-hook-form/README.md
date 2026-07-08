# React Hook Form Practice 🚀

This project demonstrates the usage of **React Hook Form** for creating and managing forms in React applications.

React Hook Form helps to handle form state, validation, error handling, and submission with less code and better performance.

---

# 📌 Topics Covered

## 1. Introduction to React Hook Form

React Hook Form is a React library used for managing forms efficiently.

It provides simple APIs to:

- Manage form data
- Handle validations
- Display errors
- Submit forms
- Reduce unnecessary re-renders

---

# Why Use React Hook Form?

## 1. Less Code

Without React Hook Form, every input requires separate state management.

Example:

```jsx
const [email,setEmail] = useState("");
```

With React Hook Form:

```jsx
<input {...register("email")} />
```

---

## 2. Better Performance

React Hook Form minimizes unnecessary component re-rendering.

---

## 3. Built-in Validation

We can easily add validations:

- Required fields
- Minimum length
- Pattern matching
- Custom validation

---

## 4. Easy Error Handling

All validation errors are available inside:

```javascript
formState.errors
```

---

# Installation

Install React Hook Form:

```bash
npm install react-hook-form
```

Import:

```javascript
import { useForm } from "react-hook-form";
```

---

# useForm()

`useForm()` is the main hook provided by React Hook Form.

It manages the complete form state.

Example:

```javascript
const {
register,
handleSubmit,
watch,
setValue,
getValues,
reset,
formState:{errors}
}=useForm();
```

---

# register()

## Definition

`register()` connects input fields with React Hook Form.

Example:

```jsx
<input 
{...register("username")}
/>
```

Here:

- username is the field name
- React Hook Form tracks this input

---

# Validation Using register()

Example:

```jsx
<input

{...register("email",{
required:"Email is required"
})}

/>
```

If email is empty, an error message will be generated.

---

# handleSubmit()

## Definition

`handleSubmit()` handles form submission.

Example:

```jsx
const submit=(data)=>{
console.log(data);
}


<form onSubmit={handleSubmit(submit)}>
```

After submitting the form, all form data is received inside the submit function.

---

# watch()

## Definition

`watch()` tracks the current value of an input field.

Example:

```javascript
const name = watch("name");
```

Usage:

```jsx
<h2>{name}</h2>
```

Whenever input changes, the value updates automatically.

---

# setValue()

## Definition

`setValue()` is used to update an input value manually.

Example:

```javascript
setValue("name","Lalit");
```

Output:

```
Name field value becomes Lalit
```

---

# getValues()

## Definition

`getValues()` returns current form values.

Example:

```javascript
const data=getValues();

console.log(data);
```

Output:

```javascript
{
 name:"Lalit",
 email:"abc@gmail.com"
}
```

---

# reset()

## Definition

`reset()` clears the form or sets default values.

Example:

```javascript
reset();
```

All input fields become empty.

---

# formState.errors

## Definition

`errors` object stores validation errors.

Example:

```javascript
errors.email.message
```

Display error:

```jsx
{
errors.email &&
<p>
{errors.email.message}
</p>
}
```

---

# Controller Component

## Definition

Controller is used for handling controlled components and third-party UI libraries.

Examples:

- Material UI
- React Select
- Date Picker

Example:

```jsx
<Controller

name="country"

control={control}

render={({field})=>(

<input {...field}/>

)}

/>
```

---

# Project Structure

```
src
|
|-- components
|     |
|     |-- LoginForm.jsx
|     |-- SignupForm.jsx
|     |-- ProfileForm.jsx
|     |-- StudentForm.jsx
|
|-- App.jsx
|-- main.jsx
```

---

# Practice Forms Created

## 1. Login Form

Features:

- Email validation
- Password validation
- Form submission


Example Fields:

```
Email
Password
Login Button
```

---

## 2. Signup Form

Features:

- Name validation
- Email validation
- Password minimum length validation


Example Fields:

```
Name
Email
Password
Signup Button
```

---

## 3. Profile Form

Features:

- Display live input value using watch()
- Update value using setValue()
- Clear form using reset()


Example Fields:

```
Name
Phone
Address
```

---

## 4. Student Registration Form

Features:

- Student information handling
- Dropdown selection
- Getting form values using getValues()


Example Fields:

```
Student Name
Age
Course
Mobile Number
```

---

# Complete Implementation

## App.jsx

```jsx
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ProfileForm from "./components/ProfileForm";
import StudentForm from "./components/StudentForm";


function App(){

return(
<>
<h1>
React Hook Form Practice
</h1>


<LoginForm/>

<hr/>

<SignupForm/>

<hr/>

<ProfileForm/>

<hr/>

<StudentForm/>

</>

)

}


export default App;
```

---

# Learning Outcomes

After completing this project, you will understand:

✅ React Hook Form basics  
✅ Form state management  
✅ Input registration  
✅ Form submission handling  
✅ Validation techniques  
✅ Error handling  
✅ Dynamic value updates  
✅ Resetting forms  
✅ Creating reusable forms  

---

# Technologies Used

- React.js
- React Hook Form
- JavaScript
- HTML
- CSS

---

# Run Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Conclusion

React Hook Form makes form development easier by reducing boilerplate code and providing powerful features like validation, error handling, and better performance.

It is widely used in modern React applications for building scalable and maintainable forms.