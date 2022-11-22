import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    width: 90%;
    min-height: 87vh;
    .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
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
    .checkout-button {
        height: 3rem;
        width: 8rem;
        background: #424242;
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer; 
    }
    .empty {
        width: 100%;
        text-align: center;
        margin: 15rem 0 12rem 0;
        font-size: 2rem;
        color: #333333;
    }
`

export const CartTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: #333333;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 5rem;
    .total {
        font-size: 2rem;
        color: #333333;
    }
    .amount {
        margin-left: 2rem;
        font-size: 2rem;
        font-weight: 600;
        color: #333333;
    }
`