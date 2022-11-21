import React from "react";
import { useState, useEffect } from "react";
import { FilterContainer } from "./Filters.styled";
import { useSelector } from "react-redux";

const WeightFilter = ( { hiddenClassName, onChange } ) => {
    const [weight, setWeight] = useState("all");
    const filtersList = useSelector((state) => state.filters.filtersList);

    useEffect(() => {
        if (filtersList.find((filter) => filter.name === "weight")) {
            setWeight(filtersList.find((filter) => filter.name === "weight").filter);
        } else {
            setWeight("all");
        }
    }, [filtersList]);

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => {setWeight("all"); onChange("all");}} className={weight === "all" ? "selected" : ""}>All</button>
            <button onClick={() => {setWeight("2to4"); onChange("2to4");}} className={weight === "2to4" ? "selected" : ""}>2-3.9kg</button>
            <button onClick={() => {setWeight("4to6"); onChange("4to6");}} className={weight === "4to6" ? "selected" : ""}>4-5.9kg</button>
            <button onClick={() => {setWeight("6to8"); onChange("6to8");}} className={weight === "6to8" ? "selected" : ""}>6-7.9kg</button>
            <button onClick={() => {setWeight("8to10"); onChange("8to10");}} className={weight === "8to10" ? "selected" : ""}>8-9.9kg</button>
            <button onClick={() => {setWeight("10plus"); onChange("10plus");}} className={weight === "10plus" ? "selected" : ""}>10+kg</button>
        </FilterContainer>
    );
}

export default WeightFilter;