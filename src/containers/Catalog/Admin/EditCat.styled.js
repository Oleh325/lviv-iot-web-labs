import styled from "styled-components";

export const EditCatContainer = styled.div`
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    width: 90%;
    min-height: 87vh;
    Form {
        width: 100%;
        align-items: center;
        gap: 3rem;
        .image-preview {
            align-items: center;
            gap: 1rem;
            .image-preview-text {
                font-size: 2rem;
                font-weight: 600;
            }
            img {
                width: 40%;
            }
        }
    }
    label {
        font-size: 2rem;
        color: var(--darkgray);
        align-self: flex-start;
    }
    .slidecontainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        input {
            width: 90%;
        }
        .slidertext {
            font-weight: 600;
            font-size: 1.2rem;
        }
    }
    .inputs {
        width: 60%;
        align-items: center;
        gap: 1rem;
    }
    .small-inputs {
        display: flex;
        gap: 2rem;
        width: 100%;
    }
    .custom-input {
        gap: 0.2rem;
        width: 100%;
        label {
            font-size: 2rem;
            color: var(--darkgray);
        }
        input {
            height: 2.5rem;
            font-size: 1.2rem;
            border: 0.1rem darkgray solid;
            border-radius: 0.5rem;
            padding-left: 0.5rem;
        }
        .input-error {
            border: 0.1rem red solid;
            border-radius: 0.6rem;
        }
        .error {
            font-size: 1rem;
            color: red;
        }
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    button:disabled {
        opacity: 35%;
    }
`

export const EditCatTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: var(--darkgray);
`