import styled from "styled-components";
import { device } from "../globalStyles";
interface ButtonProps {
    enabled?: boolean
}

export const Wraper = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 1.5fr 1fr 0.5fr;
    height: 17rem;
    width: 16rem;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 
                0px 4px 25px rgba(0, 0, 0, 0.05), 
                0px 3px 6px rgba(0, 0, 0, 0.04);

    @media ${device.mobile} {
        width: 34rem;
        grid-template-areas:
            "image info"
            "image buttons"
    }
`

export const SubTitle = styled.h2`
    margin: 0 1rem 0 1rem;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .875rem;
    color: #6C707B;
`

export const Info = styled.div`
    @media ${device.mobile} {
        grid-area: info;
    }
`

export const ImageContainer = styled.div`
    @media ${device.mobile} {
        grid-area: image;
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    grid-auto-columns: 1fr 1fr;
    @media ${device.mobile} {
        grid-area: buttons;
    }
`

export const Button = styled.button`
    background: ${(props: ButtonProps) => (props.enabled ? "#5AD88C" : "#EFF0F2")};
    border-radius: 3px;
    border: none;
    color: ${(props: ButtonProps) => (props.enabled ? "#FFFFFF" : "#000000")};
    cursor: ${(props: ButtonProps) => (props.enabled ? "pointer" : "default")};
    height: 2rem;
    width: 7rem;
    font-style: normal;
    font-weight: 600;
    font-size: .75rem;
    line-height: .75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
    max-height: 9rem;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`