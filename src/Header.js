import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from "./StateProvider";

const Header = () => {
    const [{basket }]=useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                />  
            </Link>
            <div className="header_search">
                <input 
                className="header_searchInput"
                type="text"
                placeholder="Search" 
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_Nav">
                <Link to="/login" className="header_link">
                    <div className="header_options">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_options">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_options">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <AddShoppingCartIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;