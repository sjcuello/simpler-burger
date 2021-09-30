import { useState } from "react"
import { Product } from "../../interfaces/Product"
import Button from "../Button"
import { Cart, Title } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { Wrapper, Image, SubTitle, ProductSection } from "./styles"


interface Props {
    data: Product;
}

const ProductModal: React.FC<Props> = ({ data }) => {

    const { title, subtitle, image, price } = data

    const [active, setActive] = useState(true)

    const toggle = () => {
        setActive(!active)
    }

    const addCart = () => console.log(`Toggle add cart!`)

    return (
        <Modal active={active} toggle={toggle}>
            <Wrapper>
                <ProductSection>
                    <Image src={image} />
                    <Title>
                        {title}
                    </Title>
                    <SubTitle>
                        {subtitle}
                    </SubTitle>
                </ProductSection>
                <ProductSection>
                    <Group />
                </ProductSection>
                <ProductSection>
                    <Button 
                        text="Add to my order" 
                        price={price.amount} 
                        toggle={addCart}
                        color="#5AD88C"
                    >
                        <Cart />
                    </Button>
                </ProductSection>
            </Wrapper>
        </Modal>
    )
}
export default ProductModal