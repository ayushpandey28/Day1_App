import React from 'react'
export default function Header({cartCount}) {
  return (
    <div>
        <h2>React Demo App</h2>
        <p>Cart Item Count: {cartCount}</p>
    </div>
  )
}
