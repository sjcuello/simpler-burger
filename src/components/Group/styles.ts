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

export const ToppingsSection = styled.div`
    background-color: red;
    border-radius: 0 0 .5rem .5rem;
    width: 100%;
    height: 100%;
`
export const SizeOrder = styled.div`
    background-color: green;
    border-radius: .5rem 0 0 0;
    width:100%;
`

export const SodasOrder = styled.div`
    background-color: blue;
    border-radius: 0 .5rem 0 0;
    width:100%;
`

export const TitleSection = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #000000;
`

export const ItemSection = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .75rem;
    color: #000000;
`