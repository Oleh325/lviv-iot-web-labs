import styled from "styled-components";

export const SignupContainer = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
        gap: 3rem;
        width: 40%;
        height: 70%;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 0.1rem solid darkgray;
        .title {
            font-size: 2rem;
        }
        .inputs {
            gap: 0.2rem;
            .custom-input {
                min-height: 4.2rem;
                gap: 0.2rem;
                width: 100%;
                label {
                    display: none;
                }
                input {
                    height: 2.5rem;
                    font-size: 1.2rem;
                    border: none;
                    border-bottom: 0.1rem solid var(--lightblue);
                    padding-left: 0.5rem;
                }
                input:focus {
                    outline: none;
                    border-bottom: 0.1rem solid var(--darkblue);
                }
                .input-error {
                    border: none;
                    border-bottom: 0.1rem solid red;
                }
                .error {
                    font-size: 1rem;
                    color: red;
                }
            }
        }
        .signup-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .already-a-member {
                display: flex;
                gap: 0.5rem;
                font-weight: 600;
                .login {
                    text-decoration: none;
                }
            }
            .footer-right {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                .global-error {
                    color: red;
                    font-weight: 600;
                    font-size: 1rem;
                    text-align: center;
                }
                .signup-button {
                    background-color: var(--bluebutton);
                    border: none;
                    border-radius: 0.75rem;
                    height: 2.5rem;
                    width: 9rem;
                    color: white;
                    font-weight: 600;
                }
                .signup-button:hover {
                    background: var(--bluebuttonhover);
                }
            }
        }
    }
    button:disabled {
        opacity: 35%;
    }
`