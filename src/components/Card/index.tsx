import { useState } from "react"
import { Product } from "../../interfaces/Product"
import { Sign } from "../globalStyles"
import ProductModal from "../ProductModal"
import { Wraper, Image, Title, Data, SubTitle, Buttons, Button, Cart } from "./styles"
interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
    const [state, setstate] = useState(false)

    const changeState = () => {
        setstate(!state)
        console.log(`state`, state)
    }

    const {title, subtitle, image, price} = data
    return(
        <Wraper>
            <Image src={image}/>
            <Data>
                <Title>
                    {title}
                </Title>
                <SubTitle>
                    {subtitle}
                </SubTitle>
            </Data> 
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
                state && <ProductModal></ProductModal>
            }
        </Wraper>
        
    )
}

export default Card