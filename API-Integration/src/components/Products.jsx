import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>

          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
