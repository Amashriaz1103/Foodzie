import {useContext} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className='place-order-left'>
        <h2 className='title'>Delivery Information</h2>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="Email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type="number" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone'/>
      </div>
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()!==0?20:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount()+20}</p>
            </div>
          </div>
          <button> Proceed to Payment</button>
        </div>
    </form>
  )
}

export default PlaceOrder