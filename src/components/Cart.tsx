import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';
import './styles/Cart.css';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image_link} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-price">Price: ${item.price}</p>
                  <button className="cart-remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="cart-clear-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
