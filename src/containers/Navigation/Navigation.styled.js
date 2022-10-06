import styled from 'styled-components';

export const NavContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    .selected {
        background-color: lightgray;
        font-weight: bold;
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        margin: 0;
        padding: 0 4rem 0 0;
    }
    li {
        display: flex;
        align-items: center;
        height: 100%;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        border-radius: 1rem;
        height: 60%;
        font-size: 1rem;
        font-weight: 100;
    }
    a {
        color: black;
        text-decoration: none;
    }
`