import styled from 'styled-components';

export const NavContainer = styled.div`
    position: absolute;
    left: 25rem;
    height: 4rem;
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        margin: 0;
        padding: 0 0 0 12rem;
    }
    li {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .link {
        color: black;
        border: none;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem 0.2rem 2rem;
        border-radius: 1rem;
        height: 60%;
        font-size: 1rem;
        font-weight: 100;
        cursor: pointer;
        .text {
            font-size: 1rem;
            text-align: center;
        }
    }
    .link:hover {
        background: var(--whitegray);
    }
    .selected {
        background-color: lightgray;
        font-weight: bold;
    }
    .selected:hover {
        background: var(--selected-lightgray);
    }
`