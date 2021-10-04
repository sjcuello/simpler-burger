import { useRecoilState } from "recoil";
import { Item } from "../../interfaces/Item";
import { toppings } from "../../recoil/atoms";
import { Form, ItemSection } from "../globalStyles";
import { Checkbox } from "./styles";


interface Props {
    list: Item[],
    column?: boolean
}

const CheckboxForm: React.FC<Props> = ({ list, column }) => {

    const [toppingsSelected, setToppings] = useRecoilState(toppings)
    const selectedCheckboxes = new Set<number>(toppingsSelected);

    const toggleCheckbox = ({ id }: Item) => {
        if (selectedCheckboxes.has(id)) {
            selectedCheckboxes.delete(id);
        } else {
            selectedCheckboxes.add(id);
        }
        setToppings(Array.from(selectedCheckboxes))
    }

    const isChecked = (idCurrent:number) => {
        return toppingsSelected.includes(idCurrent)
    }

    return (
        <Form column={column}>
            {
                list.length > 0 &&
                list.map((item: Item) => {
                    return (
                        <ItemSection key={item.id}>
                            <Checkbox
                                checked={isChecked(item.id)}
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