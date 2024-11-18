import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
   
  const navigate= useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="cart-items-item">
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>RS {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>Rs {getTotalCartAmount()===0? 0: 150}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b> Rs{getTotalCartAmount()===0?0: getTotalCartAmount()+150}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>

          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type='text' placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;