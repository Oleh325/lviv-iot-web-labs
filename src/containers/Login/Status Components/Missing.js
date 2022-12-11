import React from "react";
import { MissingContainer } from "./Missing.styled";
import { useNavigate } from "react-router-dom";

const Missing = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
    <MissingContainer>
        <div className="error-not-found">404 Not Found!</div>
        <button className="go-back-button" onClick={goBack}>Go back</button>
    </MissingContainer>
    )
}

export default Missing