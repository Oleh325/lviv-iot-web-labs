import styled from "styled-components";

export const CatalogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    min-height: 87vh;
`

export const FiltersContainer = styled.div`
    width: 95%;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    button {
        width: 15%;
        height: 3rem;
        background: none;
        border: 0.095rem solid black;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }
`

export const Filters = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    display: flex;
    button {
        width: 11%;
        height: 3rem;
        border: 0.08rem solid lightgrey;
        font-size: 1rem;
        font-family: sanspro-regular;
    }
    .filters {
        display: block;
        font-size: 1.1rem;
    }
    .selected {
        background-color: lightgray;
        font-weight: 600;
    }
    .hidden {
        display: none;
    }
`

export const FiltersBorder = styled.div`
    width: 100%;
    border-bottom: 0.0625rem solid black;
`

export const ItemsContainer = styled.div`
    margin-left: 4.6rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 4.6rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    .hidden {
        display: none;
    }
`