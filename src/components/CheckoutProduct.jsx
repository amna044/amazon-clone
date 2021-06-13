import React from 'react'
import "./checkoutProduct.css"
import {useStateValue} from "../Context/StateProvider"

function CheckoutProduct({id,price,rating,image,title}) {
const [{basket},dispatch]=useStateValue();


function removeItem  (){

    dispatch({
        type:"Remove_from_Basket",
        id:id
        
    })


}

    return (
        <div className="checkoutproduct">
            <img className='checkoutproduct__image' src={image} alt=""/>
            
            <div className="checkoutproduct__info"> 
            <p className="checkoutproduct__title">{title}</p>
           <p className="checkoutproduct__price"> <small>$</small> <strong>{price}</strong></p>
           <div className="checkoutproduct__rating">
           {Array(rating)
           .fill()
           .map((_)=>(<p>⭐</p>))
           }
       </div>
           <button onClick={removeItem}> Remove From Basket</button>
           </div>

           
        </div>
    )
}

export default CheckoutProduct
