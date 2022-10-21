import React from "react";
import { Link } from "react-router-dom";
import { CatalogItemContainer } from "./CatalogItem.styled";

const CatalogItem = ( { title, description, price, imagesrc, id, hiddenClassName } ) => {
    return (
        <CatalogItemContainer className={hiddenClassName}>
            <img src={imagesrc} alt="cat"></img>
            <div className="text-contents">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="price-content">
                    <div className="price-title">Price:</div>
                    <div className="price">${price}</div>
                </div>
            </div>
            <Link to={"/item/" + id} className="link"><div className="text">View more</div></Link>
        </CatalogItemContainer>
    );
}

export default CatalogItem;