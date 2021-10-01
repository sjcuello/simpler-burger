import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { Product } from "../../interfaces/Product"
import Button from "../Button"
import { Cart, Title } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"
import { flavour, itemOrder, size } from "../../recoil/atoms"
import { Wrapper, Image, SubTitle, ProductSection } from "./styles"
import { Order } from "../../interfaces/Oder"

interface Props {
    data: Product;
}

const ProductModal: React.FC<Props> = ({ data }) => {

    const { title, subtitle, image, price, additions } = data

    const [active, setActive] = useState(true)

    const toggle = () => {
        setActive(!active)
    }

    const [newItemOrder, setNewItemOrder] = useRecoilState(itemOrder)
    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)

    const addCart = () => {

        console.log(`Toggle add cart!`)

        const order: Order = {
            product: data,
            addings: {
                size: sizeSelected,
                flavour: flavourSelected
            }
        }
        setNewItemOrder(order)

        toggle()
    }

    return (
        <Modal >
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