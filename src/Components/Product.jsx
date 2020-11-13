import React from 'react'
import { useStateValue } from '../StateProvider'
import '../Styling/Product.css'

function Product({ id,  title, image, price, rating }) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            
            <div className="product_info">
                <p>{title}</p>
                
                <p className="produc-price">
                    <span> $ </span>
                    <strong> {price} </strong>
                </p>
                
                <div className="product_rating">

                    {/* Creates star rating based on number passed */}
                    {/* eslint-disable-next-line */}
                    {Array(rating).fill().map((_, i) => (<p> ⭐ </p>))}
    
                </div>
            </div>

            <img src={image} alt=""/>

            <button onClick={addToBasket}> Add to Basket </button>
            
        </div>
    )
}

export default Product
