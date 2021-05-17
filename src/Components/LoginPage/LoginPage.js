import React from 'react'
import { Link } from 'react-router-dom';
import './loginpage.css'

function LoginPage() {
    return (
        <div className="login">
            <Link to="/">
            <img className="login_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo"/>
            </Link>
            <div className="login_container">
            <h1>Sign Up</h1>
            <form>
                <h5>Email:</h5>
                <input type="email"/>
                <h5>Password:</h5>
                <input type="password"/>
                <button className="login_signInBtn">Sign In</button>
            </form>
            <p className="login_desc">By Signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale.please see our privacy Notice , our Cookies Notice and our Interest-Based Ads Notice</p>
            <button className="login_registerBtn">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage;