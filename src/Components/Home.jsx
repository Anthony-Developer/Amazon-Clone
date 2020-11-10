import React from 'react'
import '../Styling/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="amazon_homepage"/>
           
                <div className="home_row">
                    <Product id="01" title='The Lean Startup' price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3} />
                    <Product id="02" title='New Apple MacBook Pro - Space Gray' price={2499.99} image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY436_QL65_.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="03" title='D-Link WiFi Router, AC2600 MU-MIMO Dual Band Gigabit 4K Streaming and Gaming' price={122.25} image="https://m.media-amazon.com/images/I/41zM7IxdyOL._AC_SY322_.jpg" rating={4} />
                    <Product id="04" title='AmazonBasics Modern LeatherSoft Executive Chair' price={160.74} image="https://m.media-amazon.com/images/I/41H8kbXlSGL._AC_SY322_.jpg" rating={4} />
                    <Product id="05" title='New Apple iPhone 12 Pro Max - Pacific Blue' price={1099.00} image="https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="06" title='Samsung 49-inch Odyssey G9 Gaming Monitor' price={1399.99} image="https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY436_QL65_.jpg" rating={4} />
                </div> 
            </div>
        </div>
    )
}

export default Home
