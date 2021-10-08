import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Item } from "../../interfaces/Item";
import { flavour, priceExtra, size } from "../../recoil/atoms";
import { Form, ItemSection, Label } from "../globalStyles";
import { RadioButton } from "./styles";
interface Props {
    list: Item[],
    column?: boolean,
    sizes?: boolean,
    flavours?: boolean,
    selected?: number
}

const RadioButtonForm: React.FC<Props> = ({ list, column, sizes, flavours, selected }) => {

    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)
    const setNewPriceExtra = useSetRecoilState(priceExtra)

    const defineInitSelected = () => {
        return selected || (sizes ? sizeSelected : (flavours ? flavourSelected : null))
    }

    const [itemSelected, setItemSelected] = useState(defineInitSelected())

    const changeExtraPrice = (item: Item) => {
        if (sizes) {
            setNewPriceExtra(item.value || 0)
        }
    }

    const handleChangeItem = (changeEvent: any) => {
        if (!selected) {
            setItemSelected(changeEvent.target.value)

            if (sizes) {
                setSize(parseInt(changeEvent.target.value))
            }
            if (flavours) {
                setFlavour(parseInt(changeEvent.target.value))
            }
        }

    }

    const isChecked = (item: number) => {
        return itemSelected === item
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
                                checked={isChecked(item.id)}
                                onChange={handleChangeItem}
                                onClick={() => changeExtraPrice(item)}
                                id={item.id.toString()}
                            />
                            <Label htmlFor={item.id.toString()}>
                                {
                                    isChecked(item.id)
                                    
                                    ? <img src='../../assets/icons/radio-enabled.svg' alt="enabled" />
                                    : <img src='../../assets/icons/radio-disabled.svg' alt="disabled" />
                                }
                                {item.title}
                            </Label>
                        </ItemSection>
                    )
                })
            }
        </Form>
    )
}

export default RadioButtonForm