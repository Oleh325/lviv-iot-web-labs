import styled from "styled-components";

export const SuccessContainer = styled.div`
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
        color: var(--darkgray);
    }
    .description {
        white-space: pre-line;
        text-align: center;
        font-size: 2rem;
        color: var(--darkgray);
    }
    .back-button {
        height: 4rem;
        width: 14rem;
        font-size: 1.3rem;
    }
`