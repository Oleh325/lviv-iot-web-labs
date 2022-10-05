import React from "react";
import { LogoContainer } from "./Logo.styled";

const Logo = ( { image, name, link } ) => {
    return(
        <LogoContainer>
            <a href={link}>
                <img src={image} alt={`logo-${name}`}></img>
            </a>
        </LogoContainer>
    );
}

export default Logo;