import styled from 'styled-components';
import logo from '../../assets/logos/logo.svg'

export const Wraper = styled.div`
    background-color: #000000;
    max-width: 100%;
    max-height: 100%;
    height: 8rem;
    margin-top: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img.attrs(() => ({
    src: logo
  }))`
  width: 10rem;
  height: 5rem;
  margin-right: .125rem;
` 
