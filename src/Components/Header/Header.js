import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import { auth } from '../../firebase/firebaseConfig';

function Header() {
    
    // eslint-disable-next-line
    const [{basket ,user} , dispatch] = useStateValue()

    const handleAuth = ()=>{
        auth.signOut();
    }
    
    return (
        <div className="header">
            {/* {image} */}
            <Link to="/">
            <img className="header_img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
            </Link>
            {/* {input and search button} */}
            <div className="header_searchbar">
            <input className="header_searchinput" type="text" />
            <SearchIcon className="header_searchbtn" />
            </div> 
            <div className="header_nav">

            {/* {signup} */}
            <Link to={!user && '/login'}>
            <div onClick={handleAuth} className="header_options">
                <span className="header_option1">{user? `Hello ${user.email}`: "Hello Guest"}</span>
                <span className="header_option2">{user? 'Sign Out': "Sign In"}</span>
            </div>
            </Link>
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
            <Link to="/checkout">
            <div className="header_optionbasket">
                <ShoppingBasketIcon />
                <span className="header_option2 header_basketcount">{basket?.length}</span>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Header
