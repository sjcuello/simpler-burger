import { useRecoilState } from "recoil"
import { Order } from "../../interfaces/Oder"
import { cart, flavour, size } from "../../recoil/atoms"
import Button from "../Button"
import { Logo, Container, Bag } from "../globalStyles"
import { Image, Top, Wraper } from "./styles"

const Banner = () => {
    
    const [cartState, setCartState] = useRecoilState(cart)
    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)
    const toggle = () => {
        console.log(`cartState`, cartState)
        console.log(`sizeSelected`, sizeSelected)
        console.log(`flavourSelected`, flavourSelected)
        console.log("Toggle!")
        setTimeout(() => {
            setCartState([])
            setSize({} as number)
            setFlavour({} as number)
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
                <Container justifyItem="flex-start" alignItems="center">
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
                    </Container>
                </Container>
            </Top>
            <Image />
        </Wraper>
    )
}

export default Banner