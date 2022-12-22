import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 4rem;
    width: 100%;
    border: 0.0625rem solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left {
        display: flex;
        align-items: center;
        gap: 2rem;
        height: 100%;
        img {
            height: 80%;
            padding-left: 2rem;
            justify-self: left;
        }
        .username {
            color: var(--darkgray);
            font-size: 1.4rem;
        }
        .log-out-button {
            background: none;
            color: red;
            border: 0.05rem red solid;
            border-radius: 0.75rem;
            height: 2rem;
            width: 6rem;
            cursor: pointer;
        }
        .log-out-button:hover {
            background: var(--whitegray);
        }
    }
    .hidden {
        opacity: 0;
    }
`;