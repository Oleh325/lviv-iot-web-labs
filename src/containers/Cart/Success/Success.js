import React from "react";
import { SuccessContainer } from "./Success.styled";
import success from "../../../images/success.png";
import { Link } from "react-router-dom";

const Success = () => {
    return(
        <SuccessContainer>
            <img src={success} alt="success"></img>
            <div className="title">Success!</div>
            <div className="description">{"Your order was sent to processing!\n Check your email box for further information."}</div>
            <Link to="/catalog" className="back-button">Go back to Catalog</Link>
        </SuccessContainer>
    );
}

export default Success;