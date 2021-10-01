import styled from 'styled-components';
import { device } from '../globalStyles'

export const Wrapper = styled.section`
display: grid;
grid-auto-flow: row;
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem,1fr));
    justify-items: center;
    grid-gap: 3rem;
    padding: 2rem 7rem;
    @media ${device.mobile} {
        padding: 2rem 3rem;
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
`

export const Image = styled.img.attrs(props => ({
    src: props.src
  }))`
`