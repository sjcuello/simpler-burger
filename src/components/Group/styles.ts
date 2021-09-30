import styled from "styled-components"

export const ComboGroup = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
`

export const ComboSection = styled.div`
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

interface FormProps  {
    column?: boolean
}
export const Form = styled.form`
    display: grid;
    grid-auto-rows: 2rem;
    grid-template-columns: ${(props: FormProps)=>(props.column ? "repeat(auto-fit, minmax(3rem, 1fr))" : "1fr")};
    align-items: start;
`
export const TitleSection = styled.h1`
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #000000;
`

export const ItemSection = styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: end;
    margin: .5rem 0;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .75rem;
    width: 100%;
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


export const RadioButton = styled.input.attrs({
    type: "radio",
})`
    cursor: pointer;
    filter: hue-rotate(159deg);
`
export const Checkbox = styled.input.attrs({
    type: "checkbox",
})`
    cursor: pointer;
    filter: hue-rotate(159deg);
`