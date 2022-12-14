import React, { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
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
import { filtersActions } from "../../store/slices/filtersSlice";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [cats, setCats] = useState([]);
    const [error, setError] = useState("");
    const [searchError, setSearchError] = useState("");
    const input = useSelector((state) => state.search.input);
    const filtersList = useSelector((state) => state.filters.filtersList);
    const auth = useSelector((state) => state.auth);
    const [loaderHidden, setLoaderHidden] = useState(false);
    const dispatch = useDispatch();
    const axiosPrivate = useAxiosPrivate();
    const [addCat, setAddCat] = useState(<></>);
    const navigate = useNavigate();

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
        auth.roles?.find(role => role === "ADMIN")
            ? setAddCat(<button className="add-cat" onClick={() => navigate("/addcat")}><div className="text">+</div></button>)
            : setAddCat(<></>);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (error !== "") {
            setSearchError("");
        }
    }, [error]);

    useEffect(() => {
        setCats(cats?.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        }));
        let shownCats = 0;
        cats.forEach(cat => {
            if (cat.hidden === "" || cat.hidden === undefined) {
                shownCats += 1;
            }
        });
        if (shownCats === 0 && cats.length !== 0) {
            setSearchError("No cats found!");
        } else {
            setSearchError("");
        }
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
        const [fetchedCats, err] = await getCatsWithFilters(cuteness, color, weight);
        setError(err);
        setCats(fetchedCats === undefined || fetchedCats == null ? [] : fetchedCats?.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        })?.sort((a, b) => a.id - b.id));
        setLoaderHidden(true);
    }

    const getCatsWithFilters = async (cuteness, color, weight) => {
        let filters = "";
        let err = "";
        if (cuteness !== "all") {
            if (filters === "") {
                filters += `cuteness=${cuteness}`
            } else {
                filters += `&cuteness=${cuteness}`
            }
        }
        if (color !== "all") {
            if (filters === "") {
                filters += `color=${color}`
            } else {
                filters += `&color=${color}`
            }
        }
        if (weight !== "all") {
            if (filters === "") {
                filters += `weight=${weight}`
            } else {
                filters += `&weight=${weight}`
            }
        }
        if (filters === "") {
            return getCats();
        } else {
            let cats = await axiosPrivate.get(`/cats/filters?${filters}`)
            .then((response) => {
                return response.data._embedded?.cats?.map(cat => {
                    cat.hidden = "";
                    return cat;
                });
            })
            .catch((error) => {
                err = error;
            });
            return [cats, err.message];
        }
    }

    const clearFilters = async () => {
        dispatch(filtersActions.removeAllFilters());
        setIsFiltersOn(false);
        setCats([]);
        setLoaderHidden(false);
        const [fetchedCats, err] = await getCats();
        setError(err);
        setCats(fetchedCats === undefined || fetchedCats == null ? [] : fetchedCats?.map(cat => {
            if (cat.title.search(input) !== -1 || input === "" || input === null) {
                cat.hidden = "";
            } else {
                cat.hidden = "hidden";
            }
            return cat;
        })?.sort((a, b) => a.id - b.id));
        setLoaderHidden(true);
    }

    const getCats = async () => {
        let err = "";
        let cats = await axiosPrivate.get(`/cats/`).then((response) => {
            return response.data._embedded?.cats?.map(cat => {
                cat.hidden = "";
                return cat;
            });
        })
        .catch((error) => {
            err = error.message;
        });
        return [cats, err];
    }

    const refreshAfterDelete = () => {
        applyFilters();
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
                { loaderHidden && error !== "" && error !== undefined && <div className="error">{error}</div> }
                { loaderHidden && searchError !== "" && searchError !== undefined && <div className="search-error">{searchError}</div> }
                {cats.map(cat => {
                    return <CatalogItem imagesrc={cat.imagesrc} title={cat.title} description={cat.description} 
                    price={cat.price} id={cat.id} key={cat.id} hiddenClassName={cat.hidden ? cat.hidden : ""}
                    refreshAfterDelete={refreshAfterDelete} />
                })}
                {cats.length !== 0 && addCat}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;