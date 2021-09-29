import { Product } from "../../interfaces/Product"
import { Wraper, Image, Title, Data, SubTitle, Buttons, Button, Sign, Cart } from "./styles"
interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
    const {title, subtitle, image, price} = data
    console.log(`data`, data)
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
                <Button enabled={true}>
                    <Cart/>
                    Select
                </Button>
            </Buttons>
        </Wraper>
    )
}

export default Card