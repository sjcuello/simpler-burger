import { useRecoilValue } from "recoil"
import { cart } from "../../recoil/atoms"
import { Cart, Sign, Title, SubTitle } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { Buttons, CartItem, InfoContainer, Wrapper, Image, ButtonCart, GroupContainer } from "./styles"


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
                                <GroupContainer>
                                    <Group additions={item.product.additions} additionsSelected={item.addings} />
                                </GroupContainer>

                            </CartItem>
                        )
                    })
                }
            </Wrapper>
        </Modal>
    )
}

export default CartModal