import React from 'react'
import '../Styling/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../Reducer'

function Subtotal() {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue()
    console.log(basket)

    return (
        <div className="subtotal">
            <CurrencyFormat 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items):
                            <strong> {value} </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
            />

            <button> Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal
