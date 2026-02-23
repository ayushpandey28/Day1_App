import React from 'react'

export default function Cart({ totalAmt, cart, removeFromCart }) {
  return (
    <div>

        <h2>Your cart:</h2>

        {cart.map((Element, index) => (

            <div key={Element.id}>

                <span>{Element.name}</span>

                <button onClick={() => removeFromCart(Element.id)}>
                    Remove
                </button>

            </div>

        ))}

        <h3>Total Cart amount: {totalAmt}</h3>

    </div>
  )
}