export default function ProductList({products, addToCart}){
  return(
    <div>
      <h2>Products</h2>
      {
        products.map(product=>(
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price : rs.{product.price}</p>

            <button onClick={()=>addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))
      }
    </div>
  )
}