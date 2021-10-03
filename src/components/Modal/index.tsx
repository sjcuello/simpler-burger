import { useEffect, useState } from "react";
import { Container } from "../globalStyles";
import Portal from "../Portal";
import { Wrapper, CloseButton, Window } from "./styles";


interface Props {
    active: boolean,
    toggle: any
}

const Modal: React.FC<Props> = ({ children, active, toggle }) => {
    
    return (
        <Portal>
            {
                active &&
                <Wrapper>
                    <Window >
                        <CloseButton onClick={toggle}>
                            x
                        </CloseButton>
                        <Container>
                            {children}
                        </Container>
                    </Window>
                </Wrapper>
            }
        </Portal>
    )
}

export default Modal