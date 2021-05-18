import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import Payment from './Components/Payment/Payment';
import { useStateValue } from './Context/StateProvider';
import { auth } from './firebase/firebaseConfig';


function App() {
    const [{} , dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser=>{
            console.log("Auth user is>>>" ,authUser)
            if(authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

  return (
        
        <Router>
            <div className="App">
            
            <Switch>
                <Route path="/login">
                     <LoginPage/>
                 </Route>

                 <Route path="/payment">
                 <Header />
                     <Payment />
                 </Route>

                <Route path="/checkout">
                    <Header />
                     <Checkout/>
                 </Route>

                 <Route path="/">
                    <Header />
                     <Home />
                 </Route>
            </Switch>
            
            
            </div>
        </Router>
     
  );
}

export default App;
