import { useState } from "react"
import { useRecoilState } from "recoil"
import { Product } from "../../interfaces/Product"
import { isModalOpen } from "../../recoil/atoms"
import { Cart, Container, Sign, Title } from "../globalStyles"
import ProductModal from "../ProductModal"
import { Wraper, Image, SubTitle, Buttons, Button } from "./styles"
interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
    const [state, setstate] = useState(false)

    const [modalState, setModalState] = useRecoilState(isModalOpen)

    const changeState = () => {
        setstate(!state)
        setModalState(!modalState)
    }

    const { title, subtitle, image, price } = data
    return (
        <Wraper>
            <Image src={image} />
            <Container>
                <Title>
                    {title}
                </Title>
                <SubTitle>
                    {subtitle}
                </SubTitle>
            </Container>
            <Buttons>
                <Button>
                    <Sign>{price.currency}</Sign>
                    {price.amount.toFixed(2)}
                </Button>
                <Button enabled={true} onClick={() => changeState()}>
                    <Cart />
                    Select
                </Button>
            </Buttons>
            {
                state && <ProductModal data={data}></ProductModal>
            }
        </Wraper>

    )
}

export default Card