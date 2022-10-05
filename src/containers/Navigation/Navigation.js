import React from "react";
import { NavContainer } from "./Navigation.styled";

const Navigation = () => (
    <NavContainer>
        <ul>
            <li>
                <div className="selected">
                    <a href="/">Home</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="/">Catalog</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="/">Cart</a>
                </div>
            </li>
        </ul>
      </NavContainer>
);

export default Navigation;