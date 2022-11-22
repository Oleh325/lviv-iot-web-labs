import React, { useEffect } from "react";
import { HeaderContainer } from "./Header.styled";
import logo from "../../../images/logo.png"; 
import meow from "../../../meow.wav";
import Navigation from "../../Navigation/Navigation";
import Searchbar from "../../Catalog/Searchbar/Searchbar";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    useEffect(() => {}, [navigate]); 

    const playMeow = () => {
        document.getElementById("meow").play();
    }

    return(
        <div>
            <HeaderContainer>
                <img src={logo} alt={"logo"} onClick={playMeow}></img>
                <audio id="meow" src={meow} />
                <Navigation />
                <Searchbar hiddenClassName={window.location.pathname === "/catalog" ? "" : "hidden"} />
            </HeaderContainer>
        </div>
    );
}

export default Header;