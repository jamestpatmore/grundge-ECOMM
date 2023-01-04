import React from 'react'
import chevron from '../assets/images/chevron.svg';
import cart from '../assets/images/cart.gif'

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.08326;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
        <div className="panel cart">
          <h1>
            UR CART
            <img src={cart} alt="cart-gif" className='fit-gif'></img> 
          </h1>
          <p className='freeship'> Free Shipping on Orders over $100!!</p>
          <div> {cartItems.length === 0 && <p className='empty'>Your cart is empty</p>}</div>
          {/* <p class="empty">Your cart is empty.</p> */}
          <ul className="cart-summary">
            {cartItems.map((item) => (
                <li key={item.id}>
                <div className="plate">
                    <img src={item.image} alt={item.alt} className="plate" />
                    <div className="quantity">1</div>
                </div>
                <div className="content">
                    <p className="menu-item">{item.name}</p>
                    <p className="price">{item.price}</p>
                </div>
                <div className="quantity__wrapper">
                    <button onClick={() => onRemove(item)} className="decrease">
                    <img src={chevron} alt="chevron-icon" />
                    </button>
                    <div className="quantity">{item.qty}</div>
                    <button onClick={() => onAdd(item)} className="increase">
                    <img src={chevron} alt="chevron-icon" />
                    </button>
                </div>
                <div className="subtotal">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                </li>
                
            ))}
          </ul>
            {cartItems.length !== 0 && (
                <>
                    <div className="totals">
                        <div className="line-item">
                            <div className="label">Subtotal:</div>
                            <div className="amount price subtotal">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="line-item">
                            <div className="label">Tax:</div>
                            <div className="amount price tax">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="line-item">
                            <div className="label">Shipping:</div>
                            <div className="amount price tax">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="line-item total">
                            <div className="label">Total:</div>
                            <div className="amount price total">${totalPrice.toFixed(2)}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

