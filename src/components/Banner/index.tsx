import { Logo, Container, Sign } from "../globalStyles"
import { Image, Top, Wraper, Button, Bag, Text } from "./styles"
import { useState } from "react"
import ProductModal from "../ProductModal"

const Banner = () => {

    const [state, setstate] = useState(false)

    const changeState = () => {
        setstate(!state)
        console.log(`state`, state)
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
                        <Button onClick={() => changeState() }>
                            <Bag />
                            <Text flexItem={1.5}>
                                View order
                            </Text>
                            <Text>
                                <Sign>USD</Sign>
                                1234
                            </Text>
                        </Button>
                    </Container>
                </Container>
            </Top>
            <Image />
            {
                state && <ProductModal></ProductModal>
            }
        </Wraper>
    )
}

export default Banner