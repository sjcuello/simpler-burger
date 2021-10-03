import React, { useState } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { Item } from "../../interfaces/Item";
import { flavour, size } from "../../recoil/atoms";
import { Form, ItemSection } from "../globalStyles";
import { RadioButton } from "./styles";

interface Props {
    list: Item[],
    column?: boolean,
    sizes?: boolean,
    flavours?: boolean
}

const RadioButtonForm: React.FC<Props> = ({ list, column, sizes, flavours}) => {

    const [sizeSelected, setSize] = useRecoilState(size)
    const [flavourSelected, setFlavour] = useRecoilState(flavour)

    const [itemSelected, setItemSelected] = useState(sizes ? sizeSelected : (flavours ? flavourSelected : null))
    console.log(`itemSelected`, itemSelected)
    

    const handleChangeItem = (changeEvent: any) => {
        console.log(`changeEvent.target.value`, changeEvent.target.value)
        setItemSelected(changeEvent.target.value)

        if (sizes) {
            setSize(changeEvent.target.value)
        }
        if (flavours) {
            setFlavour(changeEvent.target.value)
        }
        
    }

    
    return (
        <Form column={column}>
            {
                list.length > 0 &&
                list.map((item: Item) => {
                    return (
                        <ItemSection key={item.id}>
                            <RadioButton type="radio" value={item.id} checked={itemSelected == item.id} onChange={handleChangeItem} />
                            {item.title}
                        </ItemSection>
                    )
                })
            }
        </Form>
    )

}

export default RadioButtonForm