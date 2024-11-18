import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return ( 
    <div>
    <form action="" className="place-order">
        <div className="place-order-left">
            <p className='title'>Delivery Information</p>
            <div className="multi-fields">
                <input type="text"  placeholder='First Name' />
                <input type="text"  placeholder='last Name'/>
            </div>
            <input type="email" placeholder='Email address'  />
            <input type="text"  placeholder=' Street' />
            <div className="multi-fields">
                <input type="text"  placeholder='city' />
                <input type="text"  placeholder='state'/>
            </div>
            <div className="multi-fields">
                <input type="text"  placeholder='Zip code' />
                <input type="text"  placeholder='country'/>
            </div>
            <input type='text' placeholder='Phone No.'/>
        </div>
        <div className="place-order-right">
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
        </div>
    </form>
    </div>
  )
}

export default PlaceOrder