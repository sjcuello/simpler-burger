import styled, { createGlobalStyle } from "styled-components";
import logo from '../assets/logos/logo.svg'
import cart from "../assets/icons/cart.svg"
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

interface FormProps {
    column?: boolean
}

interface ButtonProps {
    enabled?: boolean,
    backgroundColor?: string,
    widthButton?: string
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
    font-family: sans-serif;
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
export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: .25rem
`

export const ItemSection = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .5rem 0;
    font-family: 'Roboto', sans-serif;
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

/**
 *  Defining breakpoints' app
 */

const size = {
    mobile: '320px',
    tablet: '744px',
    laptop: '1440px'
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
};

export const Button = styled.button`
    background: ${(props: ButtonProps) => (props.backgroundColor ? props.backgroundColor : "#EFF0F2")};
    border-radius: 3px;
    border: none;
    color: ${(props: ButtonProps) => (props.enabled ? "#FFFFFF" : "#000000")};
    cursor: ${(props: ButtonProps) => (props.enabled ? "pointer" : "default")};
    height: 2rem;
    width: ${(props: ButtonProps) => (props.widthButton ? props.widthButton : "7rem")};
    font-style: normal;
    font-weight: 600;
    font-size: .75rem;
    line-height: .75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.mobile} {
        transform: scale(1.8);
    }
`

export const SubTitle = styled.h2`
    margin: 0 1rem 1rem 1rem;
    font-family: 'Roboto', sans-serif;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    line-height: .875rem;
    color: #6C707B;
    @media ${device.mobile} {
        display: none;
    }
`

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
    }
`
export const Form = styled.form`
    display: grid;
    grid-auto-rows: 2rem;
    grid-template-columns: ${(props: FormProps) => (props.column ? "repeat(auto-fit, minmax(3rem, 1fr))" : "1fr")};
    align-items: start;
    @media ${device.mobile} {
        flex-direction: row;
        grid-template-columns: 1fr;
    }
`