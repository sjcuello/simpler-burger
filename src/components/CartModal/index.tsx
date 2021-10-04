import { useRecoilState, useRecoilValue } from "recoil"
import { cart } from "../../recoil/atoms"
import { cartTotal } from "../../recoil/selectors"
import Button from "../Button"
import CartEmpty from "../CartEmpty"
import { Cart, Sign, Title, SubTitle } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { Buttons, CartItem, InfoContainer, Wrapper, Image, ButtonCart, GroupContainer, ButtonContainer } from "./styles"


interface Props {
    active: boolean,
    toggle: any
}

const CartModal: React.FC<Props> = ({ active, toggle }) => {

    const [cartState, setCartState] = useRecoilState(cart)
    const totalValue = useRecoilValue(cartTotal)

    const deleteItem = (index: number) => {
        setCartState([...cartState.slice(0, index), ...cartState.slice(index + 1)])
    }

    const clearCart = () => {
        setCartState([])
        toggle()
    }

    return (
        <Modal active={active} toggle={toggle}>
            <Wrapper>
                {
                    cartState.length ?
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
                                            {item.total.toFixed(2)}
                                        </ButtonCart>
                                        <ButtonCart
                                            enabled={true}
                                            backgroundColor="#F01C4F"
                                            widthButton="5.4rem"
                                            onClick={() => deleteItem(index)}
                                        >
                                            <Cart />
                                            Remove
                                        </ButtonCart>
                                    </Buttons>
                                    <GroupContainer>
                                        <Group additions={item.product.additions} additionsSelected={item.addings} />
                                    </GroupContainer>

                                </CartItem>
                            )
                        })
                        : <CartEmpty toggle={toggle} />
                }

            </Wrapper>
            {
                cartState.length &&
                <ButtonContainer>
                    <Button
                        text="Finalize order"
                        price={totalValue}
                        toggle={() => clearCart()}
                        color="#5AD88C"
                    >
                        <Cart />
                    </Button>
                </ButtonContainer>
            }

        </Modal>
    )
}

export default CartModal