import React from "react";
import { CartContainer, CartTitle, ItemsContainer, Total } from "../Cart/Cart.styled";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector((state) => state.cart.itemsList);
    const empty = items.length === 0 ? true : false
    const price = items.length === 0 ? 0 : items.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0);

    return(
        <CartContainer>
            <CartTitle>Shopping Cart</CartTitle>
            <ItemsContainer>
                { empty && <div className="empty">The cart is empty!</div>}
                { !empty && items.map(item => {
                    return <CartItem id={item.id} quantity={item.quantity} compositeId={item.compositeId} key={item.compositeId} />
                })}
                { !empty && <Total>
                    <div className="total">Total amount: </div>
                    <div className="amount">{price} $</div>
                </Total>}
            </ItemsContainer>
            <div className="buttons">
                <Link to="/catalog" className="back-button"><div>Back to Catalog</div></Link>
                <Link to={empty ? "/cart" : "/cart/checkout"} className="checkout-button">Continue</Link>
            </div>
        </CartContainer>
    );
}

export default Cart;