import React from "react"
import { useRecoilState} from "recoil"
import { Product } from "../../interfaces/Product"
import Button from "../Button"
import { Cart, Title } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { cart, flavour, size } from "../../recoil/atoms"
import { Wrapper, Image, SubTitle, ProductSection } from "./styles"
import { Order } from "../../interfaces/Oder"

interface Props {
    data: Product,
    active: boolean,
    toggle: any
}

const ProductModal: React.FC<Props> = ({ data, active, toggle }) => {

    const { title, subtitle, image, price, additions } = data

    const [itemsCart, setItemsCart] = useRecoilState(cart)
    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)

    const addCart = () => {
        
        console.log(`Toggle add cart!`)
        
        const order: Order = {
            product: data,
            addings: {
                size: sizeSelected,
                flavour: flavourSelected
            },
            total: data.price.amount
        }
        setItemsCart([...itemsCart, order])

        toggle()
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
                    <Group additions={additions} />
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