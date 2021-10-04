import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Item } from "../../interfaces/Item";
import { flavour, priceExtra, size } from "../../recoil/atoms";
import { Form, ItemSection } from "../globalStyles";
import { RadioButton } from "./styles";

interface Props {
    list: Item[],
    column?: boolean,
    sizes?: boolean,
    flavours?: boolean
}

const RadioButtonForm: React.FC<Props> = ({ list, column, sizes, flavours }) => {

    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)
    const setNewPriceExtra = useSetRecoilState(priceExtra)
    const [itemSelected, setItemSelected] = useState(sizes ? sizeSelected : (flavours ? flavourSelected : null))

    const changeExtraPrice = (item: Item) => {
        if (sizes) {
            setNewPriceExtra(item.value || 0)
        }
    }

    const handleChangeItem = (changeEvent: any) => {
        setItemSelected(changeEvent.target.value)

        if (sizes) {
            setSize(parseInt(changeEvent.target.value))
        }
        if (flavours) {
            setFlavour(parseInt(changeEvent.target.value))
        }
    }

    return (
        <Form column={column}>
            {
                list.length > 0 &&
                list.map((item: Item) => {
                    return (
                        <ItemSection key={item.id}>
                            <RadioButton
                                type="radio"
                                value={item.id}
                                checked={itemSelected === item.id}
                                onChange={handleChangeItem}
                                onClick={() => changeExtraPrice(item)}
                            />
                            {item.title}
                        </ItemSection>
                    )
                })
            }
        </Form>
    )
}

export default RadioButtonForm