import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Counter from "./components/Counter";


import StudentCard from "./components/StudentCard";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";


function App(){

return(

<>

<Header name="Ankit"/>

<hr/>

<Navbar/>

<hr/>
<StudentCard
name="Rahul"
course="React"
/>
<hr/>


<EmployeeCard
name="Amit"
role="Developer"
/>
<hr/>

<ProductCard
title="Laptop"
price="50000"
/>

<hr/>
<Footer/>

<Counter/>


</>

)

}


export default App;