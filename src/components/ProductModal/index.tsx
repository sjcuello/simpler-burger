import { useState } from "react"
import { Product } from "../../interfaces/Product"
import { Title } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { Wrapper, Image, SubTitle, ProductSection} from "./styles"


interface Props {
    data: Product;
}

const ProductModal: React.FC<Props> = ({ data }) => {

    const { title, subtitle, image, price } = data

    const [active, setActive] = useState(true)

    const toggle = () => {
        setActive(!active)
    }

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
                    {/** aca van los combos */}
                    <Group></Group>
                </ProductSection>
                <ProductSection>
                    {/** aca va el boton */}
                </ProductSection>
            </Wrapper>
        </Modal>
    )
}
export default ProductModal