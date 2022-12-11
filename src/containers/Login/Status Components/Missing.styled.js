import styled from "styled-components";

export const MissingContainer = styled.div`
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .error-not-found {
        font-size: 4rem;
        color: #444444;
    }
    .go-back-button {
        background: #555555;
        color: white;
        border: none;
        border-radius: 0.75rem;
        height: 3.5rem;
        width: 9rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
`