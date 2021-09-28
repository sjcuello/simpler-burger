import styled from 'styled-components';
import burgerBg from '../assets/images/burger-background.svg';

interface BurgerGBProps {
    rotate?: boolean
}

interface HalfProps {
    colorFill?: boolean
}

export const Container = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
`

export const Half = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props: HalfProps) => (props.colorFill ? "#FFF9EE" : '#FFFFFF')};
    border-radius: 0 0 40px 40px;
`


export const Behind = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
`
export const Front = styled.div`
    position: relative;
`

export const BurgerBG = styled.img.attrs(() => ({
    src: burgerBg
  }))`
  width: 100%;
  height: 100%;
  transform: scaleX(${(props: BurgerGBProps) => props.rotate ? -1 : 1 });
` 
