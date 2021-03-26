import React from 'react';
import "./checkoutProduct.css";

const CheckoutProduct = ({id, title,image,price,rating}) => {
    return (
        <div className="checkoutProduct">
            <img src={image}/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>  
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>★</p>
                    ))}
                </div>
                <button >Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;