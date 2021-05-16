import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'

function Header() {
    return (
        <div className="header">
            {/* {image} */}
            <div className="header_logo">
            <img className="header_img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
            </div>
            {/* {input and search button} */}
            <div className="header_searchbar">
            <input className="header_searchinput" type="text" />
            <SearchIcon className="header_searchbtn" />
            </div> 
            <div className="header_nav">

            {/* {signup} */}
            <div className="header_options">
                <span className="header_option1">Hello Guest</span>
                <span className="header_option2">Sign Up</span>
            </div>
            {/* {orders} */}
            <div className="header_options">
                <span className="header_option1">Orders</span>
                <span className="header_option2">& Return</span>
            </div>
            {/* {profile} */}
            <div className="header_options">
                <span className="header_option1">Your</span>
                <span className="header_option2">Prime</span>
            </div>
            {/* {basket} */}
            <div className="header_optionbasket">
                <ShoppingBasketIcon />
                <span className="header_option2 header_basketcount">0</span>
            </div>
            </div>
        </div>
    )
}

export default Header
