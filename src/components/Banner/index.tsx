import { useRecoilState } from "recoil"
import { cart } from "../../recoil/atoms"
import Button from "../Button"
import { Logo, Container, Bag } from "../globalStyles"
import { Image, Top, Wraper } from "./styles"

const Banner = () => {
    
    const [cartState, setCartState] = useRecoilState(cart)
    const toggle = () => {
        console.log(`cartState`, cartState)
        console.log("Toggle!")
        setTimeout(() => {
            setCartState([])
            console.log(`carrito borrado`)
        }, 4000);
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
                <Container>
                    <Container
                        backGroundColor="white"
                        heightContainer={4.5}
                        widthContainer={23}
                        borderRadiusBRigth={10}
                        borderRadiusBLeft={10}
                    >
                        <Button text="View order" price={1234} toggle={toggle}>
                            <Bag />
                        </Button>
                    </Container>
                </Container>
            </Top>
            <Image />
        </Wraper>
    )
}

export default Banner