import React from "react";
import { useState } from "react";
import { FilterContainer } from "./Filters.styled";

const ColorFilter = ( { hiddenClassName, isActive } ) => {
    const [color, setColor] = useState("all");

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => setColor("all")} className={color === "all" ? "selected" : ""}>All</button>
            <button onClick={() => setColor("white")} className={color === "white" ? "selected" : ""}>White</button>
            <button onClick={() => setColor("black")} className={color === "black" ? "selected" : ""}>Black</button>
            <button onClick={() => setColor("orange")} className={color === "orange" ? "selected" : ""}>Orange</button>
            <button onClick={() => setColor("tabby")} className={color === "tabby" ? "selected" : ""}>Tabby</button>
            <button onClick={() => setColor("spotted")} className={color === "spotted" ? "selected" : ""}>Spotted</button>
        </FilterContainer>
    );
}

export default ColorFilter;