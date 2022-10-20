import React, { useState } from "react";
import search_icon from "../../../images/search_icon.png";
import { SearchbarContainer } from "./Searchbar.styled";

const Searchbar = ( { hiddenClassName, onSearch } ) => {
    const [input, setInput] = useState("");


    return (
        <SearchbarContainer className={hiddenClassName}>
            <button>
                <img src={search_icon} alt={"search_icon"} onClick={() => onSearch(input)}></img>
            </button>
            <input onKeyDown={(e) => {if (e.key === "Enter") { onSearch(input); }}} value={input} onInput={e => setInput(e.target.value)}></input>
        </SearchbarContainer>
    );
}

export default Searchbar;