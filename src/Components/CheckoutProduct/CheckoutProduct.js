import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import './checkoutproduct.css'

function CheckoutProduct({id, title , image, price, rating}) {
    
    const [{basket} , dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch(
           {
               type: "REMOVE_FROM_BASKET",
               id: id

           }
        )
    }

    return (
        <div className="checkout_product">
            <img className="checkoutproduct_img" src={image} alt=""/>
            <div className="checkout_info">
                <p className="checkoutproduct_title">{title}</p>
                <p>
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="checkout_rating">
                {Array(rating).fill().map((_,i)=>
                <p>⭐</p>)
                }
                </div>
                <button className="checkoutproduct_btn"
                onClick={removeFromBasket}
                >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
