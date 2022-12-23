import styled from "styled-components";

export const HeaderContainer = styled.div.attrs(props => ({
    width: props.width || "9",
    widthRem: props.widthRem || "9rem"
  }))`
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
        .username-container {
            max-width: 8.4rem;
            overflow-wrap: normal;
            overflow-x: hidden;
            @keyframes sliding {
                0% {
                    right: 0rem;
                }
                75%, 85% {
                    right: calc(${props => props.widthRem} - 9rem);
                }
                85.01% {
                    right: 0rem;
                }
            }
            #username {
                position: relative;
                right: 0rem;
                color: var(--darkgray);
                font-size: 1.4rem;
                animation-name: sliding;
                animation-duration: calc(0.4s * ${props => props.width});
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
        }
        .log-out-button {
            background: none;
            color: red;
            border: 0.05rem red solid;
            border-radius: 0.75rem;
            height: 2rem;
            width: 6rem;
        }
        .log-out-button:hover {
            background: var(--whitegray);
        }
    }
    .hidden {
        opacity: 0;
    }
`;