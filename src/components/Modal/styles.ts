import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 1));
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Window = styled.div`
    position: relative;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: '2px 2px 10px rgba(0,0,0,0.3)';
    z-index: 1;
    min-width: 320px;
    min-height: 320px;
    background-color: transparent;
`
export const CloseButton = styled.button`
    background: grey;
    position: absolute;
    top: 0;
    right: 0;
`

