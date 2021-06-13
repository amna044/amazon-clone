import React from 'react'
import "./Product.css"
import { useStateValue } from "../Context/StateProvider"


function Product({id,rating,image,price, title}) {
  const [{},dispatch] =useStateValue();

const addToBasket=()=>{
dispatch({
  type:"Add_to_Basket",
  item:{
    id:id,
    rating:rating,
    image:image,
    price:price,
    title:title 
   },
});
};

    return (
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price"> <small>$</small> <strong>{price}</strong> </p>
       <div className="product__rating">
           {Array(rating)
           .fill()
           .map((_)=>(<p>⭐</p>))
           }
       </div>
       </div>
             <img className="product__image"
              src={image} alt=""/>
      
      <button onClick={addToBasket}> Add to Basket</button>
        </div>
    )
}

export default Product
