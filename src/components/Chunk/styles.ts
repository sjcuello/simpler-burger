import styled from 'styled-components';
import burgerBg from '../../assets/images/burger-background.svg';

interface BurgerGBProps {
    rotateImg?: boolean
}
interface HalfProps {
    colorFill?: boolean
}

interface BehindProps  {
    backgroundFill?: boolean
}


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props: HalfProps) => (props.colorFill ? "#FFF9EE" : '#FFFFFF')};
    border-radius: 0 0 40px 40px;
`

export const Behind = styled.div`
    display: ${(props: BehindProps) => (props.backgroundFill ? "none" : "flex" )};
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
  transform: scaleX(${(props: BurgerGBProps) => (props.rotateImg ? -1 : 1 )});
` 
