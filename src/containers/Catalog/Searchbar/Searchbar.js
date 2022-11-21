import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search_icon from "../../../images/search_icon.png";
import { searchActions } from "../../../store/reducers";
import { SearchbarContainer } from "./Searchbar.styled";

const Searchbar = ( { hiddenClassName } ) => {
    const input = useSelector((state) => state.search.input);
    const [inputState, setInputState] = useState("");
    const dispatch = useDispatch();
    

    const onSearch = () => {
        dispatch(searchActions.addSearch(inputState));
    }

    useEffect(() => {
        if (input !== "") {
            setInputState(input);
        }
    }, [input]);

    return (
        <SearchbarContainer className={hiddenClassName}>
            <button className={hiddenClassName}>
                <img src={search_icon} alt={"search_icon"} onClick={() => onSearch()}></img>
            </button>
            <input className={hiddenClassName} onKeyDown={(e) => {if (e.key === "Enter") { onSearch(); }}} value={inputState} onInput={e => setInputState(e.target.value)}></input>
        </SearchbarContainer>
    );
}

export default Searchbar;