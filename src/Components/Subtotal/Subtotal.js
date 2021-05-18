import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from '../../Context/reducer';
import { useStateValue } from '../../Context/StateProvider';
import './subtotal.css'

function Subtotal() {

    const history = useHistory();

    // eslint-disable-next-line
    const [{basket} , dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                    <input className="subtotal_giftinput" type="checkbox"/>
                    This order contains gift
                    </small>
                    </>
                )}
                prefix={"₹"}
                thousandSeparator={true}
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={"text"}
            />
            <button onClick={e=> history.push("/payment")} className="subtotal_btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
