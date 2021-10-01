import styled from 'styled-components';
import banner from '../../assets/images/banner.svg'
import bannerMobile from '../../assets/images/banner-mobile.svg'
import { device } from '../globalStyles';


export const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    height: 25rem;
    border-radius: 0 0 40px 40px;
    position: relative;
`

export const Top = styled.div`
    position: absolute;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-flow: column;
    height: 4.5rem;
    width: 100%;
    z-index: 1;
`

export const CartContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media ${device.mobile} {
        justify-content: end;
    }
`

export const Image = styled.div`
    position: absolute;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.76), rgba(255, 255, 255, 0.1)), url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 
    background-attachment: inherit;
    max-width: 100%;
    max-height: 100%;
    height: 25rem;
    border-radius: 0 0 40px 40px;
    @media ${device.mobile} {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.76), rgba(255, 255, 255, 0.1)), url(${bannerMobile});
    }
`