import { useState } from "react"
import { Product } from "../../interfaces/Product"
import { Cart, Container, Sign, Title } from "../globalStyles"
import ProductModal from "../ProductModal"
import { Wraper, Image, SubTitle, Buttons, Button } from "./styles"
interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
    const [state, setstate] = useState(false)

    const changeState = () => {
        setstate(!state)
    }

    const {title, subtitle, image, price} = data
    return(
        <Wraper>
            <Image src={image}/>
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
                <Button enabled={true} onClick={() =>changeState()}>
                    <Cart/>
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