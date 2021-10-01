import { useRecoilState } from "recoil";
import { isModalOpen } from "../../recoil/atoms";
import { Container } from "../globalStyles";
import Portal from "../Portal";
import { Wrapper, CloseButton, Window } from "./styles";


const Modal: React.FC = ({ children }) => {
    const [modalState, setModalState] = useRecoilState(isModalOpen)

    return (
        <Portal>
            {
                modalState &&
                <Wrapper>
                    <Window>
                        <CloseButton onClick={() => setModalState(!modalState)}>
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