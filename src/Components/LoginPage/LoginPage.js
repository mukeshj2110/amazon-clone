import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './loginpage.css'
import {auth} from '../../firebase/firebaseConfig'

function LoginPage() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const history = useHistory();
    const signinClick =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
            history.push("/");
            }
        })
        .catch(error=>alert(error.message))

    }

    const registerClick =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            history.push('/');
        }
        )
        .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo"/>
            </Link>
            <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>Email:</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password:</h5>
                <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" onClick={signinClick} className="login_signInBtn">Sign In</button>
            </form>
            <p className="login_desc">By Signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale.please see our privacy Notice , our Cookies Notice and our Interest-Based Ads Notice</p>
            <button onClick={registerClick} className="login_registerBtn">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage;