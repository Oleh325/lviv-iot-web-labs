import React from "react";
import { useState } from "react";
import { FilterContainer } from "./Filters.styled";

const CutenessFilter = ( { hiddenClassName } ) => {
    const [cuteness, setCuteness] = useState("all");

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => setCuteness("all")} className={cuteness === "all" ? "selected" : ""}>All</button>
            <button onClick={() => setCuteness("0to25")} className={cuteness === "0to25" ? "selected" : ""}>0-25%</button>
            <button onClick={() => setCuteness("26to50")} className={cuteness === "26to50" ? "selected" : ""}>26-50%</button>
            <button onClick={() => setCuteness("51to75")} className={cuteness === "51to75" ? "selected" : ""}>51-75%</button>
            <button onClick={() => setCuteness("76to100")} className={cuteness === "76to100" ? "selected" : ""}>76-100%</button>
        </FilterContainer>
    );
}

export default CutenessFilter;