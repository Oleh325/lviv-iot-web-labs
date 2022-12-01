import React from "react";
import { UnauthorizedContainer } from "./Unauthorized.styled";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
    <UnauthorizedContainer>
        <div className="error-not-found">401 Unauthorized!</div>
        <button className="go-back-button" onClick={goBack}>Go back</button>
    </UnauthorizedContainer>
    )
}

export default Unauthorized