import styled from "styled-components";

export const Wrapper = styled.div`
    height: 34rem;
    max-height: 45rem;
    width: 36rem;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1.5fr 1fr .25fr;
    row-gap: 1rem;
    margin-bottom: 15%;
`

export const SubTitle = styled.h2`
    margin: 0 1rem 1rem 1rem;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .875rem;
    color: #6C707B;
`

export const ProductSection = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
`

export const Image = styled.img.attrs(props => ({
    src: props.src
  }))`
    width: 100%;
    height: 100%;
    max-height: 16rem;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`