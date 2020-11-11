import React from 'react'
import '../Styling/Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
                renderText={(value) => (
                    <>
                        <p>Subtotal (0 items):
                            <strong> 0 </strong>
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
