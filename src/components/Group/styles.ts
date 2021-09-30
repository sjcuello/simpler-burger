import styled from "styled-components"

interface ComboGroupProps {
    sections: number
}

export const ComboGroup = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: ${(props: ComboGroupProps) => (props.sections > 1 ? "1fr 1fr" : "1fr")};
    width: 100%;
    height: 100%;
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
`

export const SodasOrder = styled.div`
    border-radius: 0 .5rem 0 0;
    width:100%;
    padding: 1rem;
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box; 
`