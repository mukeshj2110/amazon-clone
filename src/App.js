import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';


function App() {
  return (
        
        <Router>
            <div className="App">
            
            <Switch>
                <Route path="/login">
                     <LoginPage/>
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
