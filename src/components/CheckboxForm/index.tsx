import { useRecoilState } from "recoil";
import { Item } from "../../interfaces/Item";
import { toppings } from "../../recoil/atoms";
import { Form, ItemSection, Label } from "../globalStyles";
import { Checkbox } from "./styles";


interface Props {
    list: Item[],
    column?: boolean,
    selected?: number[]
}

const CheckboxForm: React.FC<Props> = ({ list, column, selected }) => {

    const [toppingsSelected, setToppings] = useRecoilState(toppings)

    const defineInitSelected = () => {
        return selected || toppingsSelected
    }

    const selectedCheckboxes = new Set<number>(defineInitSelected());

    const toggleCheckbox = ({ id }: Item) => {
        if (!selected) {
            if (selectedCheckboxes.has(id)) {
                selectedCheckboxes.delete(id);
            } else {
                selectedCheckboxes.add(id);
            }
            setToppings(Array.from(selectedCheckboxes))
        }

    }

    const isChecked = (idCurrent: number) => {
        return !selected
            ? toppingsSelected.includes(idCurrent)
            : selected.includes(idCurrent)
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
                                id={item.id.toString()}
                            />
                            <Label htmlFor={item.id.toString()}>
                                {
                                    isChecked(item.id)

                                        ? <img src='../../assets/icons/checkbox-enabled.svg' alt="enabled" />
                                        : <img src='../../assets/icons/checkbox-disabled.svg' alt="disabled" />
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

export default CheckboxForm