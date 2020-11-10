import React from 'react'
import '../Styling/Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean Startup</p>
                <p className="produc-price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                {/* eslint-disable-next-line */}
                    <span>⭐⭐⭐⭐</span>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""/>

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
