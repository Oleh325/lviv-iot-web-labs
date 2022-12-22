import styled from "styled-components";

export const CatalogItemContainer = styled.div`
    border: 0.1rem solid black;
    border-radius: 1rem;
    height: 25.5rem;
    width: 20%;
    margin-left: 3.7rem;
    position: relative;
    align-items: center;
    gap: 0.6rem;
    img {
        height: 12rem;
        width: 100%;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
    }
    .text-contents {
        width: 90%;
        align-items: center;
        gap: 0.8rem;
    }
    .title {
        font-weight: 800;
        font-size: 2rem;
        color: var(--darkgray);
    }
    .description {
        color: var(--lightgray);
        min-height: 3.75rem;
        max-height: 3.75rem;
        overflow-x: hidden;
        text-align: center;
        width: 100%;
    }
    .price-content {
        margin-top: 0.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .price-title {
        color: var(--lightgray);
    }
    .price {
        margin-right: 0rem;
        color: var(--darkgray);
        font-weight: 600;
    }
    .link {
        color: white;
        background-color: var(--lightgray);
        border: none;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.75rem;
        width: 40%;
        height: 8%;
        cursor: pointer;
        .text {
            font-size: 1rem;
            text-align: center;
        }
    }
    .link:hover {
        background: var(--darkgray);
    }
    button {
        position: absolute;
        bottom: 3.5%;
        right: 4%;
        height: 1.5rem;
        width: 1.5rem;
        background-color: red;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        color: white;
        font-weight: 600;
        text-align: center;
    }
    button:hover {
        background: var(--darkred);
    }
`