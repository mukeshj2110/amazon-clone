import React from 'react'
import Product from '../Product/Product'
import './home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_conatiner">
            <img className="home_img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" alt="prime_img"/>
            <div className="home_row">
                <Product
                id="1234"
                title="the lean startup"
                price={1}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={3}
                />
                <Product
                id="1235"
                 title="Yonex Badminton Racket Set of 2"
                 price={3}
                 image="data:image/jpeg;base64,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"
                 rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                id="1236"
                title="Samsung smart Watch "
                price={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={4}
                />
                <Product
                id="1239"
                title="Amazon Echo(3rd Gen)"
                price={2}
                image="data:image/jpeg;base64,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"
                rating={5}
                />
                <Product
                id="1240"
                title="New Ipad PRO(12.9inch,128GB)"
                price={6}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={5}
                />
            </div>

            <div className="home_row">
                <Product
                id="1300"
                 title="Samsung LC9405451dcsds 49' Curved LED Gaming Monitor"
                 price={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                 rating={3}
                />
            </div>


            </div>
            
        </div>
    )
}

export default Home
