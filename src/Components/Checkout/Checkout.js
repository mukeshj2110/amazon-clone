import React from 'react'
import './checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../Context/StateProvider'

function Checkout() {

    // eslint-disable-next-line
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img 
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg" alt=""/>
            
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket.map((item=>
                <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                />))}
            </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;