import React from "react";
import NavElement from "./NavElement";
import { NavContainer } from "./Navigation.styled";

const Navigation = () => {
    return(
        <NavContainer>
            <ul>
                <NavElement link="/" text="Home" />
                <NavElement link="/catalog" text="Catalog" />
                <NavElement link="/cart" text="Cart" />
            </ul>
        </NavContainer>
    );
}

export default Navigation;