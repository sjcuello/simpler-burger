import { useState } from "react"
import { useRecoilState } from "recoil"
import { cart, flavour, size } from "../../recoil/atoms"
import Button from "../Button"
import CartModal from "../Cart"
import { Logo, Container, Bag } from "../globalStyles"
import { CartContainer, Image, Top, Wraper } from "./styles"

const Banner = () => {
    const [state, setstate] = useState(false)
    const [cartState, setCartState] = useRecoilState(cart)
    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)
    const toggle = () => {
        changeState()
        console.log(`cartState`, cartState)
        console.log(`sizeSelected`, sizeSelected)
        console.log(`flavourSelected`, flavourSelected)
        console.log("Toggle!")
    }


    const changeState = () => {
        setstate(!state)
    }

    return (
        <Wraper>
            <Top>
                <Container
                    justifyItem="start"
                    marginLeft={6.25}
                    marginTop={0.75}
                >
                    <Logo />
                </Container>
                <CartContainer>
                    <Container 
                        backGroundColor="white"
                        heightContainer={4.5}
                        widthContainer="min(23rem, 70%)"
                        borderRadiusBRigth={10}
                        borderRadiusBLeft={10}
                    >
                        <Button text="View order" price={1234} toggle={toggle}>
                            <Bag />
                        </Button>
                    </Container >
                </CartContainer>
            </Top>
            <Image />
            {
                state && <CartModal active={state} toggle={changeState}></CartModal>
            }
        </Wraper>
    )
}

export default Banner