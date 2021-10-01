import React, { useEffect, useState } from "react"
import { useRecoilState} from "recoil"
import { Product } from "../../interfaces/Product"
import Button from "../Button"
import { Cart, Title } from "../globalStyles"
import Group from "../Group"
import Modal from "../Modal"

import { cart, flavour, itemOrder, size } from "../../recoil/atoms"
import { Wrapper, Image, SubTitle, ProductSection } from "./styles"
import { Order } from "../../interfaces/Oder"
import { Item } from "../../interfaces/Item"


interface Props {
    data: Product;
}

const ProductModal: React.FC<Props> = ({ data }) => {

    const { title, subtitle, image, price, additions } = data

    const [active, setActive] = useState(true)

    const toggle = () => {
        setActive(!active)
    }

    // const [items, setItems] = useRecoilState(cart)
    const [newItemOrder, setNewItemOrder] = useRecoilState(itemOrder)
    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)

    const addCart = () => {
        // setItems([...items, data])
        console.log(`Toggle add cart!`)
        
        const order: Order = {
            product: data,
            addings: {
                size: sizeSelected || {} as number,
                flavour: flavourSelected || {} as number
            }
        }
        setNewItemOrder(order)

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
                    <Group additions={additions}/>
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