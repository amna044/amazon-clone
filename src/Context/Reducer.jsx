export const initialState={
    basket:[
       { id:"1232",
        rating:"4",
        image:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
       price:"11.34",
        title:"hello amna this is for your bro",
    },
    { id:"1233",
    rating:"4",
    image:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
   price:"11.34",
    title:"hello amna this is for your bro",
},
{ id:"1234",
rating:"4",
image:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
price:"11.34",
title:"hello amna this is for your bro",
},
    ],
};

export const getBasketTotal = (basket)=>
 basket?.reduce((amount,item)=> item.price + amount,0); 


 function reducer(state, action) 
{
    

    switch(action.type)
    {
        case "Add_to_Basket":
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        

            case 'Remove_from_Basket':
                //logic for removing
                let newBasket=[...state.basket];
                const index=state.basket.findIndex((basketItem)=> basketItem.id===action.id);
                if(index >= 0){
                    newBasket.splice(index,1);
                    
                }
                else
                console.warn("cannot  remove from basket");
                return {
                    
                    ...state,
                    basket:newBasket
                };
            
        default:
            return  {
                ...state,
                basket:newBasket
            };        
    }
}

export default reducer;