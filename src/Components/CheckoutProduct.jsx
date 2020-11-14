import React from 'react'
import { useStateValue } from '../StateProvider'
import '../Styling/CheckoutProduct.css'

function CheckoutProduct({id, image, title, price, rating}) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title"> {title} </p>
                <p className="checkoutProduct_price">  <strong> ${price} </strong> </p>

                <div className="checkoutProduct_rating">

                    {/* eslint-disable-next-line */}
                    {Array(rating).fill().map((_, i) => (<p> ⭐ </p>))}
                </div>

                <button onClick={removeFromBasket}> Remove From Basket </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
