import React, { useState } from "react";
import "./Cart.css";
import Footer1 from "./Footer1";

const products = [
  { id: 1, name: "Organic Honey", price: 150, image: "/Productimg/honey.jpg" },
  { id: 2, name: "Fresh Farm Eggs", price: 130, image: "/Productimg/eggs.jpg" },
  { id: 3, name: "Handmade Cheese", price: 500, image: "/Productimg/cheese.jpg" },
  { id: 4, name: "Organic Vegetables", price: 200, image: "/Productimg/vegetables.webp" },
];

const Cart = () => {
  const [cart, setCart] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Action</span>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span className="item-name">{item.name}</span>
              <span className="item-price">₹{item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">+</button>
              </div>
              <span className="total-item-price">₹{(item.price * item.quantity)}</span>
              <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ₹{totalPrice}</h3>
          <button className="place-order-btn">Place Order</button>
        </div>

      </div>
      <Footer1 />
    </div>
  );
};

export default Cart;