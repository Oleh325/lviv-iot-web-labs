import React from "react";
import { useState } from "react";
import { FilterContainer } from "./Filters.styled";

const ColorFilter = ( { hiddenClassName, onChange } ) => {
    const [color, setColor] = useState("all");

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => {setColor("all"); onChange("all");}} className={color === "all" ? "selected" : ""}>All</button>
            <button onClick={() => {setColor("white"); onChange("white");}} className={color === "white" ? "selected" : ""}>White</button>
            <button onClick={() => {setColor("black"); onChange("black");}} className={color === "black" ? "selected" : ""}>Black</button>
            <button onClick={() => {setColor("orange"); onChange("orange");}} className={color === "orange" ? "selected" : ""}>Orange</button>
            <button onClick={() => {setColor("tabby"); onChange("tabby");}} className={color === "tabby" ? "selected" : ""}>Tabby</button>
            <button onClick={() => {setColor("spotted"); onChange("spotted");}} className={color === "spotted" ? "selected" : ""}>Spotted</button>
        </FilterContainer>
    );
}

export default ColorFilter;