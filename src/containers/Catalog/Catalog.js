import React, { useEffect } from "react";
import { getCats, getCatsWithFilters } from "../../Requests";
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
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/reducers";

const Catalog = () => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [cats, setCats] = useState([]);
    const input = useSelector((state) => state.search.input);
    const filtersList = useSelector((state) => state.filters.filtersList);
    const [loaderHidden, setLoaderHidden] = useState(false);
    const dispatch = useDispatch();

    const onColorChange = (color) => {
        dispatch(filtersActions.addFilter({
            name: "color",
            filter: color
        }));
    }

    const onCutenessChange = (cuteness) => {
        dispatch(filtersActions.addFilter({
            name: "cuteness",
            filter: cuteness
        }));
    }

    const onWeightChange = (weight) => {
        dispatch(filtersActions.addFilter({
            name: "weight",
            filter: weight
        }));
    }

    useEffect(() => {
        if (filtersList.length !== 0) {
            setIsFiltersOn(true);
        }
        applyFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setCats(cats.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const applyFilters = async () => {
        setCats([]);
        setLoaderHidden(false);
        let cuteness = "all";
        let color = "all";
        let weight = "all";
        if (filtersList.find((filter) => filter.name === "cuteness")) {
            cuteness = filtersList.find((filter) => filter.name === "cuteness").filter;
        }
        if (filtersList.find((filter) => filter.name === "color")) {
            color = filtersList.find((filter) => filter.name === "color").filter;
        }
        if (filtersList.find((filter) => filter.name === "weight")) {
            weight = filtersList.find((filter) => filter.name === "weight").filter;
        }
        const fetchedCats = await getCatsWithFilters(cuteness, color, weight);
        setCats(fetchedCats == null ? [] : fetchedCats.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }).sort((a, b) => a.id - b.id));
        setLoaderHidden(true);
    }

    const clearFilters = async () => {
        dispatch(filtersActions.removeAllFilters());
        setIsFiltersOn(false);
        setCats([]);
        setLoaderHidden(false);
        const fetchedCats = await getCats();
        setCats(fetchedCats == null ? [] : fetchedCats.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }).sort((a, b) => a.id - b.id));
        setLoaderHidden(true);
    }

    return(
        <CatalogContainer>
            <FiltersContainer>
                <Filters>
                    <div className="filter-buttons-upper">
                        <button type="button"
                                onClick={() => setIsFiltersOn(!isFiltersOn)}
                                className={"filters " + (isFiltersOn ? "selected" : "")}>Filters</button>
                        <button type="button"
                                onClick={clearFilters}
                                className="clear-filters">Clear</button>
                    </div>
                    <ColorFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onColorChange} />
                    <CutenessFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onCutenessChange} />
                    <WeightFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onWeightChange} />
                </Filters>
                <button onClick={() => applyFilters()}>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                { !loaderHidden && <div className="loader"/> }
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} price={cat.price} id={cat.id} key={cat.id} hiddenClassName={cat.hidden ? cat.hidden : ""} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;