import styled from "styled-components";

export const ItemAddedPopupContainer = styled.div`
    opacity: 0;
    transition: opacity 0.7s;
    position: absolute;
    bottom: 10rem;
    right: 3rem;
    z-index: 1;
    width: 18rem;
    height: 8rem;
    background-color: lightgrey;
    border: 0.01rem solid darkgray;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .message {
        color: #333333;
        font-weight: 600;
        font-size: 1.2rem;
        text-align: center;
    }
    .link {
        height: 1.5rem;
        width: 5rem;
        border: 0.01rem solid darkgray;
        border-radius: 0.8rem;
        text-decoration: none;
        text-align: center;
        background-color: white;
        color: #333333;
        cursor: pointer;
    }
`