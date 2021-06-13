import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img  className="home__image"
            src="http://umlconnector.com/wp-content/uploads/amazon-city-logo-885.jpg" alt="" />
       
       <div className="home__row">
       <Product  
        id="1231"
        rating={4}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

<Product  
        id="1231"
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

       </div>
       <div className="home__row" >

       <Product  
        id="1231"
        rating={2}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

<Product  
        id="1231"
        rating={4}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

<Product  
        id="1231"
        rating={5}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

       </div>
       <div className="home__row">
       <Product  
        id="1231"
        rating={5}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

<Product  
        id="1231"
        rating={5}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

       </div>
       <div className="home__row">
       <Product  
        id="1231"
        rating={5}
        image="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
        price="11.34"
        title="hello amna this is for your bro"
        
        />

       </div>
        
        </div>
    )
}

export default Home
