import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './payment.css'

function Payment() {

    const [{basket} , dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="payment_container">

            
            <h1>Checkout:(<Link to="/checkout">{basket?.length} items</Link>)</h1>


            <div className="payment_section">
                <div className="payment_title">
                    <h2>Delivery Address</h2>
                </div>
                <div className="payment_address">
                     <p> 167 , Shivaji Nagar , Pune</p>
                     <p> Pune-411027</p>
                </div>
            </div>

            <div className="payment_section">

            <div className="payment_title">
                <h2>Review And checkout</h2>
            </div>
            <div className="payment_items">
                {
                basket.map((item)=>
                <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                />
                )}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h2>Payment Method</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Payment;