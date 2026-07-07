# React Reusable Components Practice

## 📌 Objective

The goal of this project is to understand **Reusable Components** in React by creating common UI components that can be reused throughout an application. This practice focuses on writing clean, maintainable, and scalable React code using **props**, **children**, and **component composition**.

---

# Topics Covered

- What makes a component reusable?
- Component Composition
- Props Composition
- Passing Children (`children`)
- Controlled vs Uncontrolled Components
- Reusable UI Components
- Component Reusability Best Practices

---

# Components Created

## 1. Button

### Description
A reusable button component that accepts different styles and click events.

### Props

| Prop | Type | Description |
|------|------|-------------|
| children | ReactNode | Button text or elements |
| variant | string | Button style |
| onClick | function | Click event |
| disabled | boolean | Disable button |

### Example

```jsx
<Button
  variant="primary"
  onClick={handleClick}
>
  Save
</Button>
```

---

## 2. Input

### Description

Reusable input field with label.

### Props

| Prop | Type |
|------|------|
| label | string |
| value | string |
| onChange | function |
| placeholder | string |
| type | string |

### Example

```jsx
<Input
  label="Name"
  value={name}
  onChange={(e)=>setName(e.target.value)}
  placeholder="Enter name"
/>
```

---

## 3. Card

### Description

Reusable container component that displays any content using `children`.

### Props

| Prop | Type |
|------|------|
| title | string |
| children | ReactNode |

### Example

```jsx
<Card title="React">
    <p>React is awesome.</p>
</Card>
```

---

## 4. Modal

### Description

Reusable popup component.

### Props

| Prop | Type |
|------|------|
| isOpen | boolean |
| onClose | function |
| children | ReactNode |

### Example

```jsx
<Modal
    isOpen={showModal}
    onClose={()=>setShowModal(false)}
>
    <h2>Hello React</h2>
</Modal>
```

---

## 5. Loader

### Description

Reusable loading spinner.

### Props

No required props.

### Example

```jsx
<Loader />
```

---

## 6. Badge

### Description

Displays status labels.

### Props

| Prop | Type |
|------|------|
| text | string |
| color | string |

### Example

```jsx
<Badge
    text="Active"
    color="green"
/>
```

---

## 7. Avatar

### Description

Reusable profile image component.

### Props

| Prop | Type |
|------|------|
| src | string |
| name | string |
| size | number |

### Example

```jsx
<Avatar
    src="image.jpg"
    name="John"
    size={80}
/>
```

---

## 8. Table

### Description

Reusable dynamic table.

### Props

| Prop | Type |
|------|------|
| columns | array |
| data | array |

### Example

```jsx
<Table
    columns={["Name","Age","City"]}
    data={users}
/>
```

---

## 9. Pagination

### Description

Reusable pagination component.

### Props

| Prop | Type |
|------|------|
| currentPage | number |
| totalPages | number |
| onPageChange | function |

### Example

```jsx
<Pagination
    currentPage={page}
    totalPages={10}
    onPageChange={setPage}
/>
```

---

## 10. Search Input

### Description

Reusable search input for filtering data.

### Props

| Prop | Type |
|------|------|
| value | string |
| onChange | function |
| placeholder | string |

### Example

```jsx
<SearchInput
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder="Search..."
/>
```

---

# Component Composition

Component Composition is the process of combining multiple small components to build a larger UI.

### Example

```jsx
<Card title="Profile">
    <Avatar
        src="image.jpg"
        name="Lalit"
    />

    <Button>
        Edit Profile
    </Button>
</Card>
```

---

# Props Composition

Props Composition means passing different props to customize the same component instead of creating multiple similar components.

### Example

```jsx
<Button variant="primary">
    Save
</Button>

<Button variant="danger">
    Delete
</Button>

<Button variant="success">
    Submit
</Button>
```

---

# Passing Children

The `children` prop allows us to pass JSX between opening and closing tags.

### Example

```jsx
<Card title="React">

    <h3>Welcome</h3>

    <p>Learning Reusable Components</p>

</Card>
```

Inside Card Component

```jsx
function Card({ title, children }) {

    return(

        <div>

            <h2>{title}</h2>

            {children}

        </div>

    )

}
```

---

# Controlled Component

A controlled component is controlled by React state.

### Example

```jsx
const [name, setName] = useState("");

<input

    value={name}

    onChange={(e)=>setName(e.target.value)}

/>
```

---

# Uncontrolled Component

An uncontrolled component manages its own state using DOM references.

### Example

```jsx
import { useRef } from "react";

const inputRef = useRef();

<input ref={inputRef} />

<button
onClick={()=>console.log(inputRef.current.value)}
>
Get Value
</button>
```

---

# Folder Structure

```
src/
│
├── components/
│   ├── Avatar.jsx
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   ├── Loader.jsx
│   ├── Modal.jsx
│   ├── Pagination.jsx
│   ├── Search.jsx
│   └── Table.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# Best Practices

- Keep components small and focused.
- Make components reusable using props.
- Use `children` for flexible layouts.
- Avoid hardcoding values.
- Write meaningful prop names.
- Reuse components instead of duplicating code.
- Keep styling separate from logic.
- Use default props when necessary.
- Keep components independent.
- Follow single responsibility principle.

---

# Concepts Learned

- Functional Components
- Props
- Props Composition
- Component Composition
- Children Prop
- Conditional Rendering
- Dynamic Rendering
- Controlled Components
- Uncontrolled Components
- State Management (`useState`)
- Reusable UI Design
- Code Reusability
- Parent to Child Communication

---

# Learning Outcome

After completing this practice, you will be able to:

- Create reusable React components.
- Pass data using props.
- Customize components with different properties.
- Build flexible layouts using `children`.
- Manage user input with controlled components.
- Understand uncontrolled components using `useRef`.
- Compose multiple reusable components to build complex UIs.
- Write clean, reusable, and maintainable React applications.