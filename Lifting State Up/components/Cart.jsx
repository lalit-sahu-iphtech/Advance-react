export default function Cart({cart, removeFromCart,updateQuantity}){

  const totalPrice = cart.reduce((total, item)=>total + item.price * item.quantity, 0)

  return(
    <div>
      <h2>Shopping Cart</h2>
      {
        cart.map(item=>(
          <div key={item.id}>
            <h3>{item.name}</h3>

            <p>Price : Rs.{item.price}</p>

            <input type="number" value={item.quantity} onChange={(e) =>updateQuantity(
              item.id, Number(e.target.value)
            )}/>

             <button onClick={()=>removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      }
    <h2>Total : Rs.{totalPrice}</h2>

    </div>

  )
}