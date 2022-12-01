import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CatalogItemContainer } from "./CatalogItem.styled";
import { useSelector } from "react-redux";

const CatalogItem = ( { title, description, price, imagesrc, id, hiddenClassName } ) => {
    const [removeCat, setRemoveCat] = useState(<></>);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        auth.roles?.find(role => role === "ADMIN")
        ? setRemoveCat(<button className="button-remove">X</button>)
        : setRemoveCat(<></>);
    }, [auth.roles]);

    return (
        <CatalogItemContainer className={hiddenClassName}>
            <img src={imagesrc} alt="cat"></img>
            <div className="text-contents">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="price-content">
                    <div className="price-title">Price:</div>
                    <div className="price">{price}$</div>
                </div>
            </div>
            <Link to={"/item/" + id} className="link"><div className="text">View more</div></Link>
            {removeCat}
        </CatalogItemContainer>
    );
}

export default CatalogItem;