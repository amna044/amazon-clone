import React from 'react'
import {Link} from 'react-router-dom'
import './header.css';
//material icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';

function Header() {

const [{ basket }] =useStateValue();
console.log(basket);

    return (
        <nav className="header">
            {/* nav=> logo=> searchBar=> 3 linkns=>basket +counter  */}
         <Link to="/">
         <img className="header__image"
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
          alt="new"
         /> 
         </Link>
         {/* seachbar */}
          <div className="header__searchBar">
              <input type="text" className="Header__searchInput"/>
              <SearchIcon className="header__searchIcon" />
              
          </div>


<div className="header__nav">
        <Link to="/login" className="header__link">
        <div className="header__options">
                <span className="header__OptionOne" >Hello Amna</span>
                <span className="header__OptionTwo">Sign In</span>
        </div>

        </Link>
        <Link to="/checkout" className="header__link">
        <div className="header__options">
                <span className="header__OptionOne"> Returns</span>
                <span className="header__OptionTwo">& orders</span>
        </div>

        </Link>
        <Link to="/signout"  className="header__link" >
        <div className="header__options">
               <span className="header__OptionOne"> Your </span>
                <span className="header__OptionTwo">Prime</span>
        </div>

        </Link>

        {/* Basket */}


        <Link to="/checkout">
            <div className="shopping__basket">
        <ShoppingBasketIcon className="header__OptionOne" />
        <span className="header__OptionTwo">{basket?.length}</span>
        </div>
        </Link>

        </div>

        </nav>
    )
}

export default Header
