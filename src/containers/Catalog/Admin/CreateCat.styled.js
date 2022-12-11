import styled from "styled-components";

export const CreateCatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    width: 90%;
    min-height: 87vh;
    Form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        .image-preview {
            display: flex;
            flex-direction: column;
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
        color: #333333;
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
        display: flex;
        flex-direction: column;
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
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        width: 100%;
        label {
            font-size: 2rem;
            color: #333333;
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
    .back-button {
        height: 3rem;
        width: 8rem;
        background: none;
        color: #424242;      
        border: 0.0625rem solid #424242;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer; 
    }
    .continue-button {
        height: 3rem;
        width: 8rem;
        border-radius: 0.75rem; 
        background: #424242;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        cursor: pointer; 
    }
    button:disabled {
        opacity: 35%;
    }
`

export const CreateCatTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: #333333;
`