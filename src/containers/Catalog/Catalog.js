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

const cats = [
    {title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2415",
    imagesrc: "https://cataas.com/cat"},
    {title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2415",
    imagesrc: "https://cataas.com/cat"},
    {title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "6969",
    imagesrc: "https://cataas.com/cat"},
    {title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2415",
    imagesrc: "https://cataas.com/cat"},
    {title: "Amazing stuff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "priceless",
    imagesrc: "https://cataas.com/cat"}
]

const Catalog = () => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);

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
                <button>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} price={cat.price} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;