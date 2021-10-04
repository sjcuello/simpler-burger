import { useState } from "react"
import { useRecoilValue } from "recoil"
import { cartTotal } from "../../recoil/selectors"
import Button from "../Button"
import CartModal from "../Cart"
import { Logo, Container, Bag } from "../globalStyles"
import { CartContainer, Image, Top, Wraper } from "./styles"

const Banner = () => {
    const [state, setstate] = useState(false)
    const totalValue = useRecoilValue(cartTotal)

    const toggle = () => {
        changeState()
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
                        <Button text="View order" price={totalValue} toggle={toggle}>
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