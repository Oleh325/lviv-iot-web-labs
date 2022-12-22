import React from "react";
import { ItemAddedPopupContainer } from "./ItemAddedPopup.styled";
import { Link } from "react-router-dom";

const ItemAddedPopup = ( { option, itemName, isShown } ) => {

    return(
        <ItemAddedPopupContainer className={(isShown ? "shown" : "") + " flex-column"} >
            <div className="message">{option + " " + itemName} was added to cart successfully!</div>
            <Link to="/cart" className={"link " + (isShown ? "shown" : "")}>Cart</Link>
        </ItemAddedPopupContainer>
    );
}

export default ItemAddedPopup;