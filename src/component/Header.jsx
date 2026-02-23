import React from 'react'
import image from './ayush_photoHIEXOW.jpg'
import './Header.css'
export default function Header({cartCount}) {
  return (
    <div className="header">
        <img src={image}></img>
        <h2>React Demo App</h2>
        <h3>First App</h3>
        <p>Cart Item Count: {cartCount}</p>
    </div>
  )
}