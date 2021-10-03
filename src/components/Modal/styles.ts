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
    border: 1px solid rgba(255, 255, 255, 0.7);
    color:rgba(255, 255, 255, 0.7);
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.61);
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: -30px;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    cursor: pointer;
`

