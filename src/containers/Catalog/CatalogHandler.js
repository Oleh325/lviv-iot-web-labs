import React, { useState } from "react";
import Header from "../App/Header/Header";
import Catalog from "./Catalog";

const CatalogHandler = ( { catsArray } ) => {
    const [input, setInput] = useState();

    const updateInput = (input) => {
        setInput(input);
    }

    return(
        <>
            <Header onInputSubmit={updateInput} />
            <Catalog catsArray={catsArray} input={input} />
        </>
    );
}

export default CatalogHandler;