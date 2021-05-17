import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import './product.css'

function Product({id, title, price , rating , image}) {
     const [{basket} , dispatch] = useStateValue()
      console.log(basket);
    const addtobasket =()=>{
        dispatch({
            type: "ADD_TO_BASKET" ,
            item:{
                id:id,
                title: title,
                price: price ,
                image: image,
                rating: rating
            },
        })
        
    }
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i)=>(

                <p>⭐</p>
                ))}
            </div>
            </div>
            <img  className="product_img" src={image} alt=""/>

            <button className="product_button"
            onClick={addtobasket}
            >Add to Basket</button>
        </div>
    )
}

export default Product
