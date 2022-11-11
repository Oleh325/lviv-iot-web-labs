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

const Catalog = ( { catsArray = [], input } ) => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [cats, setCats] = useState([]);
    const [color, setColor] = useState("all");
    const [cuteness, setCuteness] = useState("all");
    const [weight, setWeight] = useState("all");
    const [loaderHidden, setLoaderHidden] = useState("");

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
        setLoaderHidden("");
        const getCatsAsync = async () => {
            await new Promise(r => setTimeout(r, 2000));
            setCats(await getCats());
            setLoaderHidden("hidden");
        }
        getCatsAsync();
    }, []);

    useEffect(() => {
        setCats(cats.map(cat => {
            if (cat.title.search(input) !== -1 || input === "") {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const applyFilters = () => {
        const getCatsWithFiltersAsync = async (cuteness, color, weight) => {
            setCats(await getCatsWithFilters(cuteness, color, weight));
        } 
        getCatsWithFiltersAsync(cuteness, color, weight);
        setCats(cats.map(cat => {
            if (cat.title.search(input) === -1 && input !== "") {
                cat.hidden = "hidden";
            }
            return cat;
        }));
    }

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
                <div className={"loader " + loaderHidden} />
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} price={cat.price} id={cat.id} key={cat.id} hiddenClassName={cat.hidden ? cat.hidden : ""} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;