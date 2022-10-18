import React from "react";
import { HeaderContainer } from "./Header.styled";
import logo from "../../../images/logo.png"; 
import Navigation from "../../Navigation/Navigation";
import Searchbar from "../../Catalog/Searchbar/Searchbar";

const Header = () => {
    return(
        <div>
            <HeaderContainer>
                <img src={logo} alt={"logo"}></img>
                <Navigation />
                <Searchbar hiddenClassName={window.location.pathname === "/catalog" ? "" : "hidden"} />
            </HeaderContainer>
        </div>
    );
}

export default Header;