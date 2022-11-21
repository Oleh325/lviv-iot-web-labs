import React from "react";
import { useState, useEffect } from "react";
import { FilterContainer } from "./Filters.styled";
import { useSelector } from "react-redux";

const CutenessFilter = ( { hiddenClassName, onChange } ) => {
    const [cuteness, setCuteness] = useState("all");
    const filtersList = useSelector((state) => state.filters.filtersList);

    useEffect(() => {
        if (filtersList.find((filter) => filter.name === "cuteness")) {
            setCuteness(filtersList.find((filter) => filter.name === "cuteness").filter);
        } else {
            setCuteness("all");
        }
    }, [filtersList]);

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => {setCuteness("all"); onChange("all");}} className={cuteness === "all" ? "selected" : ""}>All</button>
            <button onClick={() => {setCuteness("0to25"); onChange("0to25");}} className={cuteness === "0to25" ? "selected" : ""}>0-25%</button>
            <button onClick={() => {setCuteness("26to50"); onChange("26to50");}} className={cuteness === "26to50" ? "selected" : ""}>26-50%</button>
            <button onClick={() => {setCuteness("51to75"); onChange("51to75");}} className={cuteness === "51to75" ? "selected" : ""}>51-75%</button>
            <button onClick={() => {setCuteness("76to100"); onChange("76to100");}} className={cuteness === "76to100" ? "selected" : ""}>76-100%</button>
        </FilterContainer>
    );
}

export default CutenessFilter;