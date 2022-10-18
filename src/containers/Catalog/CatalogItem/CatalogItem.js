import React from "react";
import { CatalogItemContainer } from "./CatalogItem.styled";

const CatalogItem = ( { title, description, price, imagesrc } ) => {
    return (
        <CatalogItemContainer>
            <img src={imagesrc} alt="cat"></img>
            <div className="text-contents">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="price-content">
                    <div className="price-title">Price:</div>
                    <div className="price">${price}</div>
                </div>
            </div>
            <button>View more</button>
        </CatalogItemContainer>
    );
}

export default CatalogItem;