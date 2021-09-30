import { useState } from "react";
import { Item } from "../../interfaces/Item";
import { Form, ItemSection } from "../globalStyles";
import { RadioButton } from "./styles";



interface Props {
    list: Item[],
    column?: boolean
}

const RadioButtonForm: React.FC<Props> = ({list, column}) => {

    const [itemSelected, setItemSelected] = useState(list[0]?.id)

    const handleChangeItem = (changeEvent: any) => {
        console.log(`changeEvent.target.value`, changeEvent.target.value)
        setItemSelected(changeEvent.target.value)
        console.log('Seelected: ', itemSelected);
        
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