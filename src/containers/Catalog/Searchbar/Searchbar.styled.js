import styled from "styled-components";

export const SearchbarContainer = styled.div`
    opacity: 100%;
    height: 50%;
    width: 15%;
    display: flex;
    align-items: center;
    border: 0.0625rem solid black;
    border-radius: 0.5rem;
    margin-right: 2rem;
    padding-left: 0.5rem;
    button {
        height: 100%;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    img {
        padding-top: 0.2rem;
        padding-left: 0;
    }
    input {
        height: 100%;
        font-size: 1.5rem;
        background: none;
        border: none;
        width: 100%;
        :focus {
            outline: none;
        }
    }
`