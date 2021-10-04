import styled from "styled-components";
import { Button } from "../globalStyles";

export const Wrapper = styled.div`
    height: 100vh;
    width: 36rem;
    display: grid;
    grid-gap: 1rem;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 6px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.11);
    }

    ::-webkit-scrollbar-thumb {
        background: blue;
        left: 65.65%;
        right: 33.99%;
        top: 32.1%;
        bottom: 63.52%;
        background-color: rgba(125, 125, 125, 0.71);
        border-radius: 16px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(103, 103, 103, 0.71);
    }
`

export const CartItem = styled.div`
    background-color: #FFFFFF;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2,1fr);
    max-height: 22rem;
    border-radius: .5rem;
    
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 45% 1fr;
    padding: 1rem;
    grid-gap: .25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
`

export const ButtonCart = styled(Button)`
    align-self: flex-start;
    justify-self: center;
`

export const InfoContainer = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
`

export const Image = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
    max-height: 16rem;
    object-fit: cover;
    border-radius: 8px 0 0 0;
`
