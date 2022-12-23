import styled from "styled-components";

export const ItemContainer = styled.div`
    height: 92vh;
    margin: 2rem 3rem;
    gap: 10rem;
    .edit-cat {
        margin-top: -8rem;
        margin-bottom: -2rem;
        width: 8rem;
        height: 3rem;
        align-self: flex-end;
        border-radius: 0.75rem;
        border: none;
        background-color: var(--bluebutton);
        .text {
            color: white;
            font-size: 1rem;
            font-weight: 600;
        }
    }
    .edit-cat:hover {
        background: var(--bluebuttonhover);
    }
    .shown {
        opacity: 1;
    }
`

export const ItemContent = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    img {
        height: 23rem;
        width: 40%;
        overflow: hidden;
        border-radius: 0.5rem;
    }
    .content-specs {
        width: 60%;
        gap: 1rem;
        height: 100%;
        justify-content: space-between;
    } 
    .options {
        height: 10%;
        display: flex;
        gap: 0.5rem;
    }
    .option {
        background: none;
        border: 0.0625rem solid lightgray;
        border-radius: 0.5rem;
        padding: 0 1rem;
        height: 100%;
        font-size: 1rem;
    }
    .selected {
        background: lightgray;
    }
    .text-content {
        gap: 1rem;
    }
    .title {
        font-size: 3rem;
        font-weight: 600;
        color: var(--darkgray);
    }
    .description {
        font-size: 1.5rem;
        color: var(--lightgray);
        max-height: 11.45rem;
        min-height: 11.45rem;
        overflow-x: hidden;
    }
    .specs {
        display: flex;
        gap: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const ItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    .price {
        font-size: 2rem;
        font-weight: 600;
    }
    .buttons {
        display: flex;
        gap: 2rem;
    }
`

export const ItemEmpty = styled.div`
    min-height: 90vh;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    .empty-title {
        font-size: 4rem;
        font-weight: 600;
        color: var(--darkgray);
    }
`