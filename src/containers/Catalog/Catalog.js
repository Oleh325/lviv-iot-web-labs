import React from "react";
import {
    CatalogContainer,
    FiltersContainer,
    ItemsContainer }
    from "./Catalog.styled";
import ColorFilter from "./Filters/ColorFilter";
import CutenessFilter from "./Filters/CutenessFilter";
import WeightFilter from "./Filters/WeightFilter";
import CatalogItem from "./CatalogItem/CatalogItem";
import { FiltersBorder, Filters } from "./Catalog.styled";
import { useState } from "react";

const Catalog = ( { catsArray } ) => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [cats, setCats] = useState(catsArray);

    const applyFilters = () => {
        
    }

    return(
        <CatalogContainer>
            <FiltersContainer>
                <Filters>
                    <button type="button"
                            onClick={() => setIsFiltersOn(!isFiltersOn)}
                            className={"filters " + (isFiltersOn ? "selected" : "")}>Filters</button>
                    <ColorFilter hiddenClassName={isFiltersOn ? "" : "hidden"} />
                    <CutenessFilter hiddenClassName={isFiltersOn ? "" : "hidden"} />
                    <WeightFilter hiddenClassName={isFiltersOn ? "" : "hidden"} />
                </Filters>
                <button onClick={() => applyFilters()}>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} price={cat.price} id={cat.id} key={cat.id} hiddenClassName={cat.hidden} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;