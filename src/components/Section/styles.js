import styled from 'styled-components';

export const List = styled.section`
    display: grid;
    background-color: red;
    grid-auto-flow: column;
    justify-items: center;
    grid-gap: 3rem;
    padding: 20rem 8rem;
`

export const Logo = styled.div`
    background-image: url(${props => props.path});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:bottom;
    max-width: 100%;
    max-height: 100%;
    height: 25rem;
`