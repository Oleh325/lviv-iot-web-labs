import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 15rem;
    width: 100%;
    border: 0.0625rem solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const FooterContent = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FooterText = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FooterTitle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #333333;
`

export const FooterDescription = styled.div`
    color: #444444;
`

export const LogoPaw = styled.img`
    width: 5%;
    padding-right: 15%;
`

export const FooterLogos = styled.div`
    width: 15%;
    display: flex;
    gap: 0.5rem;
`

export const FooterSeparator = styled.div`
    width: 90%;
    height: 0.03125rem;
    background-color: black;
`

export const Copyrights = styled.div`
    font-size: 1rem;
    color: #444444;
`