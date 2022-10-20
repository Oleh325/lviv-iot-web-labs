import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 92vh;
    margin: 2rem 3rem;
    gap: 10rem;
`

export const ItemContent = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    img {
        height: 23rem;
        width: 40%;
        overflow: hidden;
        border-radius: 0.5rem;
    }
    .content-specs {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        justify-content: space-between;
    } 
    .options {
        height: 10%;
        display: flex;
        gap: 0.5rem;
    }
    .option {
        background: none;
        border: 0.0625rem solid lightgray;
        border-radius: 0.5rem;
        padding: 0 1rem;
        height: 100%;
        font-size: 1rem;
        cursor: pointer;
    }
    .selected {
        background: lightgray;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .title {
        font-size: 3rem;
        font-weight: 600;
        color: #333333;
    }
    .description {
        font-size: 1.5rem;
        color: #444444;
    }
    .specs {
        display: flex;
        gap: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const ItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    .price {
        font-size: 2rem;
        font-weight: 600;
    }
    .buttons {
        display: flex;
        gap: 2rem;
    }
    .back-button {
        height: 3rem;
        width: 8rem;
        background: none;
        color: #424242;      
        border: 0.0625rem solid #424242;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer; 
    }
    .addtocart-button {
        height: 3rem;
        width: 8rem;
        background: #424242;
        color: white;      
        border: none;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer; 
    }
`