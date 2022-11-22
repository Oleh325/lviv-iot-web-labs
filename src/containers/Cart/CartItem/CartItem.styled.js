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
            width: 10rem;
            overflow: hidden;
            border-radius: 0.75rem 0 0 0.75rem;
        }
        .left-text {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            .title {
                color: #333333;
                font-weight: 600;
                font-size: 3rem;
            }
            .option {
                color: #333333;
                font-size: 1.2rem;
            }
        }   
    }
    .right-content {
        display: flex;
        align-items: center;
        gap: 6rem;
        height: 100%;
        margin-right: 2rem;
        .amount-controls {
            display: flex;
            gap: 2rem;
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
            .amount-content {
                font-size: 2rem;
                font-weight: 600;
                color: #333333;
            }
        }
        .price {
            font-size: 2rem;
            font-weight: 600;
            color: black;
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
    }
`