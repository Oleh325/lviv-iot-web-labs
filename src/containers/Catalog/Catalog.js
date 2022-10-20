import React, { useEffect } from "react";
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

const Catalog = ( { catsArray, input } ) => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [cats, setCats] = useState(catsArray);
    const [color, setColor] = useState("all");
    const [cuteness, setCuteness] = useState("all");
    const [weight, setWeight] = useState("all");

    const onColorChange = (color) => {
        setColor(color);
    }

    const onCutenessChange = (cuteness) => {
        setCuteness(cuteness);
    }

    const onWeightChange = (weight) => {
        setWeight(weight);
    }

    useEffect(() => {
        setCats(cats.map(cat => {
            if (cat.title.search(input) !== -1 || input === "") {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }));
    }, [input]);

    const applyFilters = () => {
        setCats(cats.map(cat => {
            if (color !== "all" && cat.color !== color) {
                cat.hidden = "hidden";
            }
            else if (cuteness !== "all") {
                switch (cuteness) {
                    case "0to25":
                        if (cat.cuteness > 25) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "26to50":
                        if (cat.cuteness <= 25 || cat.cuteness > 50) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "51to75":
                        if (cat.cuteness <= 50 || cat.cuteness > 75) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "76to100":
                        if (cat.cuteness <= 75 || cat.cuteness > 100) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    default:
                        cat.hidden = "";
                        break;
                }
            }
            else if (weight !== "all") {
                switch (weight) {
                    case "2to4":
                        if (cat.weight < 2 || cat.weight >= 4) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "4to6":
                        if (cat.weight < 4 || cat.weight >= 6) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "6to8":
                        if (cat.weight < 6 || cat.weight >= 8) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "8to10":
                        if (cat.weight < 8 || cat.weight >= 10) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    case "10plus":
                        if (cat.weight < 10) {
                            cat.hidden = "hidden";
                        } else {
                            cat.hidden = "";
                        }
                        break;
                    default:
                        cat.hidden = "";
                        break;
                }
            }
            else {
                cat.hidden = "";
            }
            return cat;
        }));
    }

    useEffect(() => {
        setCats(catsArray.map(cat => {
            cat.hidden = "";
            return cat;
        }));
    }, []);

    return(
        <CatalogContainer>
            <FiltersContainer>
                <Filters>
                    <button type="button"
                            onClick={() => setIsFiltersOn(!isFiltersOn)}
                            className={"filters " + (isFiltersOn ? "selected" : "")}>Filters</button>
                    <ColorFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onColorChange} />
                    <CutenessFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onCutenessChange} />
                    <WeightFilter hiddenClassName={isFiltersOn ? "" : "hidden"} onChange={onWeightChange} />
                </Filters>
                <button onClick={() => applyFilters()}>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} price={cat.price} id={cat.id} key={cat.id} hiddenClassName={cat.hidden ? cat.hidden : ""} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;