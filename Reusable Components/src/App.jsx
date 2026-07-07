
//---component resuable---->
// import Button from "./components/Button"
// function App() {
//   return (
//    <>
//    <Button text="Login"/>
//    <Button text="Register"/>
//    <Button text="Submit"/>

import { useEffect, useState } from "react"
import Pagination from "./components/Pagination";

//    </>
//   )
// }

//-----Component Composition----->

// function Header(){
//   return (
//     <h1>Header</h1>
//   )
// }
// function Footer(){
//   return (
//     <h1>Footer</h1>
//   )
// }

// function App() {
//   return (
//    <>
//    <Header/>
//    <Footer/>   
//    </>
//   )
// }

  //-------props compostition, passing children----->
  
  // import Layout from "./components/Layout"
  // function App() {
  //   return (
     
  //    <Layout 
  //    children={
  //      <>
  //       <h1>Welcome to my Website</h1>
  //       <p>This is the home page</p>
  //       <button>Get started</button>
  //      </>
  //    }  
  //    />
    
  //   )
  // }

  //----Controlled Components(jish i/p ki value react state control kre->use->validation, form handling

  // function App() {
  //   const[name, setName] = useState("");
  //   return (
  //     <>
  //     <input type="text" placeholder="enter name.."
  //     onChange={(e)=>setName(e.target.value)} />
  //     </>
    
  //   )
  // }

  //---UnControled component-jish i/p ki value DOM khud manage kre
  //use-file upload, simple form
  
  // import { useRef } from "react";
  // function App() {
  //   const inputRef = useRef();

  //   const show = ()=>{
  //     alert(inputRef.current.value);
  //   }
    
  //   return (
  //     <>
  //     <input ref={inputRef} type="text" placeholder="enter name.." />
  //     <button onClick={show}>Show</button>
  //     </>
    
  //   )
  // }


  //--------practice------->
  //1. Button, 2. Input
    
  
  // function App() {
  //   const[name, setName] = useState("");
  //   return (

  //     <>
  //     <input value={name}
  //     placeholder="enter name.."
  //     onChange={(e)=>setName(e.target.value)}
  //      />
  //      <h3>{name}</h3>

      
  //     </>
    
  //   )
  // }
  
  //3. card component
  // import Card from "./components/Card"
  // function App() {
  //   return (
  //     <>
  //     <Card title="React" description="React is js library"/>
  //     </>
    
  //   )
  // }

  // // 4. Modal component
  // import Modal from "./components/Modal"
  // function App() {
  //   const[show, setShow] = useState(false);
  //   return (
  //     <>
  //     <button onClick={()=>setShow(true)}>open modal</button>
  //     <Modal isOpen={show} onClose={() =>setShow(false)}>
  //     <h2>Welcome</h2>
  //     <p>This is resuable modal</p>
  //     </Modal>
  //     </>
    
  //   )
  // }

  //5. Loader component
  
  // import Loader from "./components/Loader"
  // function App() {
  //   const[loading, setLoading] = useState(true);
  //   useEffect(()=>{
  //     setTimeout(()=>{
  //       setLoading(false);
  //     }, 3000)
  //   },[])
  //   return (
  //     <>
  //     {loading ?  (<Loader/>) : (<h1>Welcome to react</h1>)}
       
      
  //     </>
    
  //   )
  // }

  //6. Badge Component
  //import Badge from "./components/Badge";

// function App() {
//   return (
//     <>
//       <Badge
//         text="Active"
//         color="green"
//       />
//      <br/>
//      <br/>
//       <Badge
//         text="Pending"
//         color="orange"
//       />
//       <br/>
//      <br/>

//       <Badge
//         text="Inactive"
//         color="red"
//       />
//       <br/>
//      <br/>
//     </>
//   );
// }

// 7. Avatar Component
// import Avatar from "./components/Avatar"
// function App(){
//   return(
//     <>
//     <Avatar
//         src="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg"
//         name="John"
//         size={80}
//       />

//       <br/>

//       <Avatar
//         src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080"
//         name="Alex"
//         size={120}
//       />
//     </>
//   )
// }

// 8. Table Component
// import Table from "./components/Table";

// function App() {
//   const columns = ["Name", "Age", "City"];

//   const users = [
//     {
//       id: 1,
//       name: "Lalit",
//       age: 22,
//       city: "Kanpur",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       age: 24,
//       city: "Delhi",
//     },
//     {
//       id: 3,
//       name: "Aman",
//       age: 20,
//       city: "Lucknow",
//     },
//   ];

//   return (
//     <>
//       <Table
//         columns={columns}
//         data={users}
//       />
//     </>
//   );
// }

// 9. Pagination component
// function App(){
//   const[currPage, setCurrPage] = useState();
//   const totalPages = 5;
//   const products = [
//     "Laptop",
//     "Mouse",
//     "Keyboard",
//     "Monitor",
//     "Phone",
//   ];

//   return(
//     <>
//     <h1>Reusable Pagination Component</h1>

//     <h2>Current Page : {currPage}</h2>

//     <p>{products[currPage - 1]}</p>
//     <Pagination currPage={currPage} totalPages={totalPages} onPageChange={setCurrPage}/>
//     </>
//   )
// }

//10. Search Component
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Mobile",
  ];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Product..."
      />

      <ul>
        {filteredProducts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App
