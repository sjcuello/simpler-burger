import { useState } from "react"
import { Product } from "../../interfaces/Product"
import { Cart, Sign, Button, SubTitle} from "../globalStyles"
import ProductModal from "../ProductModal"
import { Wraper, Image,  Buttons, Info, TitleCard } from "./styles"
interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {

    const [modalState, setModalState] = useState(false)

    const changeState = () => {
        setModalState(!modalState)
    }

    const { title, subtitle, image, price } = data
    return (
        <Wraper>
            <Image src={image} />
            <Info>
                <TitleCard>
                    {title}
                </TitleCard>
                <SubTitle>
                    {subtitle}
                </SubTitle>
            </Info>
            <Buttons>
                <Button>
                    <Sign>{price.currency}</Sign>
                    {price.amount.toFixed(2)}
                </Button>
                <Button enabled={true} backgroundColor="#5AD88C" onClick={() => changeState()}>
                    <Cart />
                    Select
                </Button>
            </Buttons>
            {
                modalState && <ProductModal data={data} active={modalState} toggle={changeState}></ProductModal>
            }
        </Wraper>

    )
}

export default Card