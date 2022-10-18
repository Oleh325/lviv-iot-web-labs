import React from "react";
import search_icon from "../../../images/search_icon.png";
import { SearchbarContainer } from "./Searchbar.styled";

const Searchbar = ( { hiddenClassName } ) => {
    return (
        <SearchbarContainer className={hiddenClassName}>
            <button>
                <img src={search_icon} alt={"search_icon"}></img>
            </button>
            <input></input>
        </SearchbarContainer>
    );
}

export default Searchbar;