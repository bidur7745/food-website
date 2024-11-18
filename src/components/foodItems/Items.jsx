

import React, { useContext } from 'react';
import './items.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Items = ({ id, name, price, description, image }) => {
    const { removeFromCart, addToCart, cartItems, url } = useContext(StoreContext);

    return (
        <div className="food-item-container">
            <div className="food-item">
                <div className="food-img">
                    <img src={image} alt={name} />
                    {!cartItems[id] ? (
                        <img
                            className="add"
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_white}
                            alt="Add"
                        />
                    ) : (
                        <div className="food-item-counter">
                            <img
                                onClick={() => removeFromCart(id)}
                                src={assets.remove_icon_red}
                                alt="Remove"
                            />
                            <p>{cartItems[id]}</p>
                            <img
                                onClick={() => addToCart(id)}
                                src={assets.add_icon_green}
                                alt="Add"
                            />
                        </div>
                    )}
                </div>
                <div className="food-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="Rating" />
                    </div>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">RS {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Items;
{/* <img src={url+"images/"+image} alt={name} /> */}