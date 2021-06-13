import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import "./checkout.css";
import CheckoutProduct  from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket} ]=useStateValue();

    return (
        <div className="checkout">
    <div className="checkout__left">
          <img className="checkout__ad" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg" />
            {basket?.length===0 ? (
                <div>
                    <h2>
                        your basket is empty</h2>
                        <p>
                            sjkfsdbj dssjkjdsjf ddsjbfhdbfsd vsdbfdsb dbdsjkk
                            mdfbgkvf 
                            dvkjdjskbkds
                            d chjdf kdfdskjfhd

                        </p>
                         </div>
            ):
            (
                <div> 
                     <h2 className="checkout__title"> 
                     Your shopping basket
                     </h2>
                     {basket.map(item=>(
                     <CheckoutProduct 
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />

                     ))}
                
                </div>
                
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>Subtotls</h1>
                    <Subtotal/> 
                     </div>
            )}
        </div>
    )
}

export default Checkout
