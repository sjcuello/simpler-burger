import { useRecoilValue } from "recoil"
import { cart } from "../../recoil/atoms"
import { Cart, Sign, Title, SubTitle } from "../globalStyles"
import Modal from "../Modal"
import { Buttons, CartItem, InfoContainer, Wrapper, Image, ButtonCart } from "./styles"


interface Props {
    active: boolean,
    toggle: any
}

const CartModal: React.FC<Props> = ({ active, toggle }) => {
    
    const cartState = useRecoilValue(cart)
    const changeState = () => {
        toggle()
    }
    return (
        <Modal active={active} toggle={toggle}>
            <Wrapper>
                {
                    cartState &&
                    cartState.map((item, index) => {
                        return (
                            <CartItem key={index}>
                                <Image src={item.product.image} />
                                <InfoContainer>
                                    <Title>
                                        {item.product.title}
                                    </Title>
                                    <SubTitle>
                                        {item.product.subtitle}
                                    </SubTitle>
                                </InfoContainer>

                                <Buttons>
                                    <ButtonCart widthButton="4rem">
                                        <Sign>{item.product.price.currency}</Sign>
                                        {item.product.price.amount.toFixed(2)}
                                    </ButtonCart>
                                    <ButtonCart
                                        enabled={true}
                                        backgroundColor="#F01C4F"
                                        widthButton="5.4rem"
                                        onClick={() => changeState()}
                                    >
                                        <Cart />
                                        Select
                                    </ButtonCart>
                                </Buttons>
                            </CartItem>
                        )
                    })
                }
            </Wrapper>
        </Modal>
    )
}

export default CartModal