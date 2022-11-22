import React, { useEffect, useState } from "react";
import { CartItemContainer } from "./CartItem.styled";
import { getCatById } from "../../../Requests";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/reducers";

const CartItem = ( { id, quantity, compositeId } ) => {
    const [cartCat, setCartCat] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getCartCatAsync = async (id) => {
            const fetchedCat = await getCatById(id);
            setCartCat(fetchedCat == null ? {} : fetchedCat);
        } 
        getCartCatAsync(id);
    }, [id, compositeId]);

    const removeFromCart = () => {
        console.log(compositeId);
        dispatch(cartActions.removeItemFromCart(compositeId));
    }

    const incrementItem = () => {
        dispatch(cartActions.incrementItem(compositeId));
    }

    const decrementItem = () => {
        dispatch(cartActions.decrementItem(compositeId));
    }

    return(
        <CartItemContainer>
            <div className="left-content">
                <img src={cartCat.imagesrc} alt="cat"></img>
                <div className="left-text">
                    <div className="title">{cartCat.title}</div>
                    <div className="option">Option: {compositeId.replace(id, "")}</div>
                </div>
            </div>
            <div className="right-content">
                <div className="amount-controls">                
                    <button className="add-button" onClick={incrementItem}>+</button>
                    <div className="amount-content">{quantity}</div>
                    <button className="subtract-button" onClick={decrementItem}>-</button>
                </div>
                <div className="price">{cartCat.price * quantity}$</div>
                <button className="remove-button" onClick={removeFromCart}>Remove</button>
            </div>
        </CartItemContainer>
    );
}

export default CartItem;