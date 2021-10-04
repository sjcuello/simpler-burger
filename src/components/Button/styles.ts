import styled from "styled-components";


interface ButtonProps {
    colorButton?: string
}

interface TextProps {
    flexItem?: number;
}

export const ButtonTemplate = styled.button`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 1fr;
    align-items: center;
    padding: .5rem 1rem;
    min-width: min(34rem, 95%);
    height: 2.5rem;
    background: ${(props: ButtonProps) => (props.colorButton || "#F01C4F")} ;
    border-radius: .5rem;
    margin: 1rem;
    border: none;
    color: #000000;
`

export const Text = styled.span`
    display: flex;
    cursor: pointer;
    flex: ${(props: TextProps) => (props.flexItem || 1)};
    justify-content: right;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: .75rem;
    line-height: 2rem;
    text-align: center;
    color: #FFFFFF;
`