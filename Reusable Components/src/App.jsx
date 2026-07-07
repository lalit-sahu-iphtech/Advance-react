
//---component resuable---->
// import Button from "./components/Button"
// function App() {
//   return (
//    <>
//    <Button text="Login"/>
//    <Button text="Register"/>
//    <Button text="Submit"/>

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

  //-------props compostition------>
  
  import Layout from "./components/Layout"
  function App() {
    return (
     
     <Layout 
     children={
       <>
        <h1>Welcome to my Website</h1>
        <p>This is the home page</p>
        <button>Get started</button>
       </>
     }  
     />
    
    )
  }
  
export default App
