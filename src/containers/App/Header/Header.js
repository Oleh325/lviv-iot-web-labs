import React, { useEffect } from "react";
import { HeaderContainer } from "./Header.styled";
import logo from "../../../images/logo.png"; 
import meow from "../../../meow.wav";
import Navigation from "../../Navigation/Navigation";
import Searchbar from "../../Catalog/Searchbar/Searchbar";
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/slices/authSlice";

const Header = () => {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

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
            <HeaderContainer>
                <div className="header-left">
                    <img src={logo} alt={"logo"} onClick={playMeow}></img>
                    <audio id="meow" src={meow} />
                    <div className="username">{user}</div>
                    <button className="log-out-button" onClick={signOut}>Log Out</button>
                </div>
                <Navigation />
                <Searchbar hiddenClassName={window.location.pathname === "/catalog" ? "" : "hidden"} />
            </HeaderContainer>
        </div>
    );
}

export default Header;