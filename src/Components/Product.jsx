import React from 'react'
import '../Styling/Product.css'

function Product({ id,  title, image, price, rating }) {
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

            <button> Add to Basket </button>
            
        </div>
    )
}

export default Product
