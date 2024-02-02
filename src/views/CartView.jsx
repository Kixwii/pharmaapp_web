import React from 'react';
import CartItem from '@/components/CartItem'; // Adjust the import path based on your project structure

const CartView = () => (
  <div name="cart">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
      <div>
        <div className="cart-page-title">
          <h1>Your Cart</h1>
        </div>
        <div className="items-container">
          <CartItem />
        </div>
        <div className="proceed-button">
          <button>Proceed to Check-out</button>
        </div>
      </div>
    </body>
  </div>
);

export default CartView;