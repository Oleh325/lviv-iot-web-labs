import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CatalogItemContainer } from "./CatalogItem.styled";
import { useSelector } from "react-redux";
import useAxiosPrivate from '../../.././hooks/useAxiosPrivate';

const CatalogItem = ( { title, description, price, imagesrc, id, hiddenClassName, refreshAfterDelete } ) => {
    const [removeCat, setRemoveCat] = useState(<></>);
    const auth = useSelector((state) => state.auth);
    const axiosPrivate = useAxiosPrivate();

    const removeItem = async () => {
        await axiosPrivate.delete(`http://localhost:8080/api/cats/${id}`)
            .catch((error) => {
                console.error(error);
            });
        refreshAfterDelete();
    }

    useEffect(() => {
        auth.roles?.find(role => role === "ADMIN")
        ? setRemoveCat(<button className="button-remove" onClick={removeItem}>X</button>)
        : setRemoveCat(<></>);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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