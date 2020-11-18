import React from 'react'
import '../Styling/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="amazon_homepage"/>
           
                <div className="home_row">
                    <Product id="01" title='PlayStation 5 Console: Stunning Games - Marvel at incredible graphics and experience new PS5 features' price={499.99} image="https://images-na.ssl-images-amazon.com/images/I/61982vi8l4L._SL1500_.jpg" rating={5} />
                    <Product id="02" title='New Apple MacBook Pro with M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray' price={1299.99} image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY436_FMwebp_QL65_.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="03" title='Logitech C920x Pro HD Webcam: Full HD 1080p video calling and recording' price={99.99} image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg" rating={4} />
                    <Product id="04" title='AmazonBasics Modern LeatherSoft Executive Chair' price={160.74} image="https://m.media-amazon.com/images/I/41H8kbXlSGL._AC_SY322_.jpg" rating={4} />
                    <Product id="05" title='New Apple iPhone 12 Pro Max 128GB - Pacific Blue' price={1099.99} image="https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="06" title='Samsung 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model' price={1399.99} image="https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY436_QL65_.jpg" rating={4} />
                </div> 
            </div>
        </div>
    )
}

export default Home
