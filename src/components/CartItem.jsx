import React from 'react';

const CartItem = () => (
  <div className="item-container">
    <div className="image-container">
      <img alt="img" />
    </div>
    <div className="item-text-field">
      {/* Add your text content here */}
    </div>
    <div className="delete-button">
      <button>
        <i className="material-symbols-outlined">delete</i>
      </button>
    </div>
  </div>
);

export default CartItem;