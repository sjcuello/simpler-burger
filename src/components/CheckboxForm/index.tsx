import { Item } from "../../interfaces/Item";
import { Form, ItemSection } from "../globalStyles";
import { Checkbox } from "./styles";


interface Props {
    list: Item[],
    column?: boolean
}

const CheckboxForm: React.FC<Props> = ({ list, column }) => {

    const selectedCheckboxes = new Set<Item>();

    const toggleCheckbox = (topping: Item) => {
        if (selectedCheckboxes.has(topping)) {
            selectedCheckboxes.delete(topping);
        } else {
            selectedCheckboxes.add(topping);
        }
        console.log(`selectedCheckboxes`, Array.from(selectedCheckboxes))
    }

    return (
        <Form column={column}>
            {
                list.length > 0 &&
                list.map((item: Item) => {
                    return (
                        <ItemSection key={item.id}>
                            <Checkbox
                                onChange={() => toggleCheckbox(item)}
                            />
                            {item.title}
                        </ItemSection>
                    )
                })
            }
        </Form>
    )
}

export default CheckboxForm