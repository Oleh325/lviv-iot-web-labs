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
    .filter-buttons-upper {
        display: flex;
        gap: 2rem;
    }
    button {
        width: 11%;
        height: 3rem;
        border: 0.08rem solid lightgrey;
        font-size: 1rem;
        font-family: sanspro-regular;
    }
    .clear-filters {
        width: 11%;
        height: 3rem;
        border: 0.08rem solid red;
        font-size: 1rem;
        color: red;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    row-gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
    .add-cat {
        border: 0.1rem solid darkgray;
        border-radius: 1rem;
        height: 25rem;
        width: 20%;
        margin-left: 3.7rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        cursor: pointer;
        background: none;
        .text {
            color: darkgray;
            font-size: 10rem;
        }
    }
    .loader, .loader:before, .loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load7 1.8s infinite ease-in-out;
        animation: load7 1.8s infinite ease-in-out;
    }
    .loader {
        color: darkgray;
        font-size: 10px;
        margin: 80px auto;
        position: relative;
        text-indent: -9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .loader:before, .loader:after {
        content: '';
        position: absolute;
        top: 0;
    }
    .loader:before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 3.5em;
    }
    @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
    @keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
    .error {
        color: red;
        font-size: 2rem;
        margin: 3rem auto 0 auto;
        position: relative;
    }
    .search-error {
        color: #333333;
        font-size: 2rem;
        margin: 3rem auto 0 auto;
        position: relative;
    }
    .hidden {
        display: none;
    }
`