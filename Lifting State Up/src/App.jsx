//Lifting state up basic eg
import{useState} from "react";

import InputBox from "./components/InputBox"
import Display from "./components/Display"


export default function App(){
  const[name, setName] = useState("");

  return(
    <>
    <h3>Lifting state up eg</h3>

    <InputBox setName={setName}/>

    <Display name={name}/>
    </>
  )

}

// export default App
// import {useState} from "react";

// import ProductList from "./components/ProductList";

// import Cart from "./components/Cart";



// function App(){


// const products=[

// {
// id:1,
// name:"Laptop",
// price:50000
// },

// {
// id:2,
// name:"Mobile",
// price:20000
// },

// {
// id:3,
// name:"Headphone",
// price:3000
// }

// ];



// const [cart,setCart]=useState([]);



// /*
// ADD TO CART
// */

// function addToCart(product){


// const existingProduct = cart.find(

// (item)=>item.id===product.id

// );



// if(existingProduct){


// setCart(

// cart.map(item=>

// item.id===product.id

// ?

// {
// ...item,
// quantity:item.quantity+1
// }

// :

// item

// )

// )


// }

// else{


// setCart([

// ...cart,

// {
// ...product,
// quantity:1
// }

// ])


// }


// }



// /*
// REMOVE FROM CART
// */

// function removeFromCart(id){


// setCart(

// cart.filter(

// (item)=>item.id!==id

// )

// )

// }



// /*
// UPDATE QUANTITY
// */


// function updateQuantity(id,quantity){


// setCart(

// cart.map(item=>

// item.id===id

// ?

// {
// ...item,
// quantity
// }

// :

// item

// )

// )


// }



// return(

// <div>


// <h1>
// Shopping Cart App
// </h1>



// <ProductList

// products={products}

// addToCart={addToCart}

// />



// <Cart

// cart={cart}

// removeFromCart={removeFromCart}

// updateQuantity={updateQuantity}

// />



// </div>

// )

// }


// export default App;