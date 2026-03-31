import React from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove, formatPrice }) => {
  return (
    <div className="cart-item" key={item.id}>
     <div className="item-emoji">
     <img src={item.image} alt={item.name} className="cardImg" />
      </div>
      <div className="item-details">
        <div className="item-category">{item.category}</div>
        <h3 className="item-name">{item.name}</h3>
        <div className="item-unit-price">{formatPrice(item.price)} each</div>
      </div>
      <div className="item-controls">
        <div className="quantity-control">
          <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>
             - 
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>
             + 
          </button>
        </div>

        <div className="item-subtotal">{formatPrice(item.price * item.quantity)}</div>

        <button className="remove-btn" onClick={() => onRemove(item.id)} title="Remove item">
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
