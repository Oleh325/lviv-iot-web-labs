import React from "react";
import { HeaderContainer } from "./Header.styled";
import logo from "../../../images/logo.png"; 
import Navigation from "../../Navigation/Navigation";

const Header = () => {
    return(
        <div>
            <HeaderContainer>
                <img src={logo} alt={"logo"}></img>
                <Navigation />
            </HeaderContainer>
        </div>
    );
}

export default Header;