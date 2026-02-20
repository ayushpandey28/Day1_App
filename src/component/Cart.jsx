import React from 'react'

export default function Cart({ totalAmt, cart,removeFromCart}) {
  return (
    <div>
        <h2>Your cart:</h2>
        {cart.map((Element, index) => <span key={ProductCard.name}></span>)}
        <button onClick={(()=>removeFromCart)}></button>
        <h3>Total Cart amount: {totalAmt}</h3>
    </div>
  )
}