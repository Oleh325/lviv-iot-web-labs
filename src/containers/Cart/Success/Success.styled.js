import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 2rem auto;
    width: 50%;
    min-height: 87vh;
    img {
        width: 40%;
    }
    .title {
        font-size: 3rem;
        font-weight: 600;
        color: #333333;
    }
    .description {
        white-space: pre-line;
        text-align: center;
        font-size: 2rem;
        color: #333333;
    }
    .back-button {
        height: 4rem;
        width: 14rem;
        background: #424242;
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1.3rem;
        cursor: pointer; 
    }
`