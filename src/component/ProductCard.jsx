import React from 'react';
export default function ProductCard({product, addToCart}) {
  return (
    <div>
        <img src={product.image} alt={product.name} width="100"/>
        <h4>{product.name}</h4>
        <p>$ {product.price}</p>
        <button onClick={()=>addToCart(product)}>
            Add to Cart
        </button>
    </div>
  )
}