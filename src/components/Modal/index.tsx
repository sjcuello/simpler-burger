import { Container } from "../globalStyles";
import Portal from "../Portal";
import { Wrapper, CloseButton, Window } from "./styles";

interface Props {
    children?: any,
    toggle?: any,
    active?: boolean
}

const Modal: React.FC<Props>= ({ children, toggle, active }) => {
    
    return (
        <Portal>
            {
                active &&
                <Wrapper>
                    <Window>
                        <CloseButton onClick={toggle}>
                            X
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