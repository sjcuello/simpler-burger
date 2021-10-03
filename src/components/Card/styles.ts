import styled from "styled-components";
import { device, Title } from "../globalStyles";


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
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 2fr;
        grid-template-areas:
            "image info"
            "image buttons"
    }
`

export const TitleCard = styled(Title)`
    @media ${device.mobile} {
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2rem;
        margin: 2rem 2rem 0 2rem;
    }
`

export const Info = styled.div`
    @media ${device.mobile} {
        grid-area: info;
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    grid-auto-columns: 1fr 1fr;
    @media ${device.mobile} {
        grid-area: buttons;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
    }
`

export const Image = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
    max-height: 9rem;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    @media ${device.mobile} {
        grid-area: image;
        max-height: none;
        border-radius: 8px 0 0 8px;
    }
`