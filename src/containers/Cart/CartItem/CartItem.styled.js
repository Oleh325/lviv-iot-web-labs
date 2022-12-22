import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9rem;
    width: 100%;
    border: 0.0725rem black solid;
    border-radius: 0.75rem;
    .left-content {
        display: flex;
        align-items: center;
        gap: 3rem;
        height: 100%;
        img {
            height: 100%;
            width: 12rem;
            overflow: hidden;
            border-radius: 0.75rem 0 0 0.75rem;
        }
        .left-text {
            gap: 0.5rem;
            .title {
                color: var(--darkgray);
                font-weight: 600;
                font-size: 3rem;
            }
            .option {
                color: var(--darkgray);
                font-size: 1.2rem;
            }
        }   
    }
    .right-content {
        display: flex;
        align-items: center;
        gap: 4rem;
        height: 100%;
        margin-right: 2rem;
        .amount-controls {
            display: flex;
            gap: 1rem;
            align-items: center;
            button {
                height: 3rem;
                width: 3rem;
                background: none;
                color: black;      
                border: 0.01rem black solid;
                border-radius: 0.5rem;
                font-size: 1.5rem;
                cursor: pointer;
            }
            button:hover {
                background: var(--whitegray);
            }
            .amount-content {
                font-size: 2rem;
                font-weight: 600;
                color: var(--darkgray);
                width: 4.125rem;
                text-align: center;
            }
        }
        .price {
            font-size: 2rem;
            font-weight: 600;
            color: black;
            width: 11rem;
            text-align: center;
        }
        .remove-button {
            height: 3rem;
            width: 8rem;
            background: red;
            color: white;      
            border: none;
            border-radius: 0.75rem; 
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }
        .remove-button:hover {
            background: var(--darkred);
        }
    }
`