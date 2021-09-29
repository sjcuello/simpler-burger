import styled from "styled-components";
import cart  from "../../assets/icons/cart.svg"

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
`

export const Data = styled.div`
`

export const Title = styled.h1`
    margin: .5rem 1rem .5rem 1rem;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #000000;
`


export const SubTitle = styled.h2`
    margin: .5rem 1rem 0 1rem;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .875rem;
    color: #6C707B;
`
export const Buttons = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    grid-auto-columns: 1fr 1fr;
`

export const Button = styled.button`
    background: ${(props: ButtonProps) => (props.enabled ? "#5AD88C" : "#EFF0F2")};
    border-radius: 3px;
    border: none;
    color: ${(props: ButtonProps) => (props.enabled ? "#FFFFFF" : "#000000")};
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

export const Sign = styled.p`
    color: #8E8E9A;
    margin-right: .125rem;
`
export const Cart = styled.img.attrs(() => ({
    src: cart
  }))`
  width: 1rem;
  height: 1rem;
  margin-right: .125rem;
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