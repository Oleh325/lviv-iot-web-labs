import React, { useEffect } from "react";
import { HeaderContainer } from "./Header.styled";
import logo from "../../../images/logo.png"; 
import meow from "../../../meow.wav";
import Navigation from "../../Navigation/Navigation";
import Searchbar from "../../Catalog/Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/slices/authSlice";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(document.getElementById("username").textContent.length * 12 > 144
            ? `${(document.getElementById("username").textContent.length * 12 / 16)}`
            : "9");
    }, []);

    useEffect(() => {}, [navigate]); 

    const playMeow = () => {
        document.getElementById("meow").play();
    }

    const signOut = async () => {
        await axiosPrivate("/auth/signout");
        dispatch(authActions.logOut());
        navigate("/login");
    }

    return(
        <div>
            <HeaderContainer width={width} widthRem={width + "rem"}>
                <div className="header-left">
                    <img src={logo} alt={"logo"} onClick={playMeow}></img>
                    <audio id="meow" src={meow} />
                    <div className="username-container">
                        <div id="username">{user}</div>
                    </div>
                    <button className="log-out-button" onClick={signOut}>Log Out</button>
                </div>
                <Navigation />
                <Searchbar hiddenClassName={window.location.pathname === "/catalog" ? "" : "hidden"} />
            </HeaderContainer>
        </div>
    );
}

export default Header;