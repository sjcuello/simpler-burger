import styled from "styled-components";
import logo from '../assets/logos/logo.svg'
import cart  from "../assets/icons/cart.svg"
import bag from '../assets/icons/bag.svg'

interface ContainerProps {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    justifyItem?: string,
    alignItems?: string,
    backGroundColor?: string
    heightContainer?: number;
    widthContainer?: string;
    borderRadiusBRigth?: number;
    borderRadiusBLeft?: number;
}

interface FormProps  {
    column?: boolean
}


export const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: ${(props: ContainerProps) => (props.alignItems ? `${props.alignItems}` : 'flex-start')};
    justify-content: ${(props: ContainerProps) => (props.justifyItem ? `${props.justifyItem}` : 'center')};
    height: ${(props: ContainerProps) => (props.heightContainer ? `${props.heightContainer}rem` : 'auto')};
    width: ${(props: ContainerProps) => (props.widthContainer ? `${props.widthContainer}` : 'auto')};
    background-color: ${(props: ContainerProps) => (props.backGroundColor ? `${props.backGroundColor}` : 'none')};
    margin-top: ${(props: ContainerProps) => (props.marginTop ? `${props.marginTop}rem` : 0)};
    margin-bottom: ${(props: ContainerProps) => (props.marginBottom ? `${props.marginBottom}rem` : 0)};
    margin-left: ${(props: ContainerProps) => (props.marginLeft ? `${props.marginLeft}rem` : 0)};
    margin-right: ${(props: ContainerProps) => (props.marginRight ? `${props.marginRight}rem` : 0)};
    border-bottom-right-radius: ${(props: ContainerProps) => (props.borderRadiusBRigth ? `${props.borderRadiusBRigth}px` : 0)};
    border-bottom-left-radius: ${(props: ContainerProps) => (props.borderRadiusBLeft ? `${props.borderRadiusBLeft}px` : 0)};
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

export const Sign = styled.span`
    color: #8E8E9A;
    margin-right: .125rem;
`

export const Logo = styled.img.attrs(() => ({
    src: logo
  }))`
  width: 10rem;
  height: 5rem;
`

export const Form = styled.form`
    display: grid;
    grid-auto-rows: 2rem;
    grid-template-columns: ${(props: FormProps)=>(props.column ? "repeat(auto-fit, minmax(3rem, 1fr))" : "1fr")};
    align-items: start;
`

export const ItemSection = styled.span`
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

export const Divider = styled.div`
    align-self: center;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
`

export const Cart = styled.img.attrs(() => ({
    src: cart
  }))`
  width: 1rem;
  height: 1rem;
  margin-right: .125rem;
` 

export const Bag = styled.img.attrs(() => ({
    src: bag
  }))`
    width: 1rem;
    height: 1rem;
` 