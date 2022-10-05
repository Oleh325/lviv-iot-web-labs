import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 13rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13rem;
    .heading {
        width: 90%;
        display: flex;
        gap: 3rem;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .text-content-title {
        font-weight: 600;
        font-size: 3rem;
        color: #333333;
    }
    .text-content-description {
        font-size: 1.5rem;
        color: #444444;
    }
    img {
        width: 40%;
    }
    .content-cats {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
    .tiles {
        width: 90%;
        display: flex;
        gap: 8rem;
        justify-content: space-between;
    }
    button {
        height: 4rem;
        width: 15rem;
        background: #424242;
        color: white;      
        border: none;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1.5rem;
        cursor: pointer; 
    }
`