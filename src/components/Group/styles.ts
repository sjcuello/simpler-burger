import styled from "styled-components"
import { device } from "../globalStyles"

interface ComboGroupProps {
    sections: number
}

export const ComboGroup = styled.div`
    display: grid;
    /* grid-template-rows: ${(props: ComboGroupProps) => (props.sections > 1 ? "1fr 1fr" : "1fr")}; */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "sizes flavours flavours"
        "toppings toppings toppings";
    width: 100%;
    height: 100%;
    @media ${device.mobile} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas: 
        "sizes   toppings"
        "flavours toppings"
        "flavours .";
    }
`

export const ComboTop = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 2fr;
    border-radius: .5rem .5rem 0 0;
    width: 100%;
    height: 100%;
`
export const Divider = styled.div`
    align-self: center;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
`

export const TitleSection = styled.h1`
    font-family: 'Antonio', 'Roboto', sans-serif;
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #000000;
`

export const ToppingsSection = styled.div`
    border-radius: 0 0 .5rem .5rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box; 
    grid-area: toppings;
`

export const SizeOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    border-radius: .5rem 0 0 0;
    width:100%;
    padding: 1rem;
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box; 
    grid-area: sizes;
`

export const SodasOrder = styled.div`
    border-radius: 0 .5rem 0 0;
    width:100%;
    padding: 1rem;
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box; 
    grid-area: flavours;
    display: flex;
    flex-direction: column;
`