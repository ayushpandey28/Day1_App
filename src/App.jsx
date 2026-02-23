import { useState } from "react";
import Header from "./component/Header";
import ProductList from "./component/ProductList";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 56000, image: "" },
    { id: 2, name: "Mobile", price: 20000, image: "" },
    { id: 3, name: "Tablet", price: 10000, image: "" }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  }

  return (
    <div>
      <Header cartCount={cart.length} />
      <ProductList products={products} addToCart={addToCart} />

      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h1>Cart Items</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}