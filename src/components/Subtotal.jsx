import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../Context/StateProvider'
import { getBasketTotal } from '../Context/Reducer';

function Subtotal() {
    const [{basket},dispatch]=useStateValue();
console.log(getBasketTotal(basket));
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({basket.length} items):<strong>{`${value}`} </strong>
                <br/>
                <small className="subtotal__gift">

                    <input type="checkbox"></input> this contain a gift
                </small>

                </p>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
            
            
            />
            <br></br>
            <button>
               Proceed to Checkout
            </button>
            
        </div>
    )
}

export default Subtotal
