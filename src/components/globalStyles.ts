import styled from "styled-components";
import logo from '../assets/logos/logo.svg'

interface ContainerProps {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    justifyItem?: string,
    backGroundColor?: string
    heightContainer?: number;
    widthContainer?: number;
    borderRadiusBRigth?: number;
    borderRadiusBLeft?: number;
}

export const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: ${(props: ContainerProps) => (props.justifyItem ? `${props.justifyItem}` : 'center')};
    height: ${(props: ContainerProps) => (props.heightContainer ? `${props.heightContainer}rem` : 'auto')};
    width: ${(props: ContainerProps) => (props.widthContainer ? `${props.widthContainer}rem` : 'auto')};
    background-color: ${(props: ContainerProps) => (props.backGroundColor ? `${props.backGroundColor}` : 'none')};
    margin-top: ${(props: ContainerProps) => (props.marginTop ? `${props.marginTop}rem` : 0)};
    margin-bottom: ${(props: ContainerProps) => (props.marginBottom ? `${props.marginBottom}rem` : 0)};
    margin-left: ${(props: ContainerProps) => (props.marginLeft ? `${props.marginLeft}rem` : 0)};
    margin-right: ${(props: ContainerProps) => (props.marginRight ? `${props.marginRight}rem` : 0)};
    border-bottom-right-radius: ${(props: ContainerProps) => (props.borderRadiusBRigth ? `${props.borderRadiusBRigth}px` : 0)};
    border-bottom-left-radius: ${(props: ContainerProps) => (props.borderRadiusBLeft ? `${props.borderRadiusBLeft}px` : 0)};
`

export const Sign = styled.p`
    color: #8E8E9A;
    margin-right: .125rem;
`

export const Logo = styled.img.attrs(() => ({
    src: logo
  }))`
  width: 10rem;
  height: 5rem;
`