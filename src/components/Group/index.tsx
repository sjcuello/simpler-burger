import { useState } from "react";
import useFetchFakeApi from "../../hooks/useFetchFakeApi";
import { Item } from "../../interfaces/Item";
import { ComboGroup, ComboSection, Divider, SizeOrder, SodasOrder, TitleSection, ToppingsSection, Form, ItemSection, RadioButton, Checkbox } from "./styles";

interface Props {
    colorfill?: boolean,
    removeBackground?: boolean;
}

const Group: React.FC<Props> = ({ }) => {

    const API = "http://localhost:3001/"

    const toppings: Item[] = useFetchFakeApi([], `${API}toppings`)

    const flavours: Item[] = useFetchFakeApi([], `${API}flavours`)

    const sizes: Item[] = useFetchFakeApi([], `${API}sizes`)


    const [sizeSelected, setSizeSelected] = useState(null)
    const [sodaSelected, setSodaSelected] = useState(null)
    const [toppingSelected, setToppingSelected] = useState([])

    const handleOptionChangeSize = (changeEvent: any) => {
        setSizeSelected(changeEvent.target.value)
        console.log('Soda selected: ', sizeSelected);
    }

    const handleOptionChangeFlavours = (changeEvent: any) => {
        setSodaSelected(changeEvent.target.value)
        console.log('Flavour selected: ', sodaSelected);
    }

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
        <ComboGroup>
            <ComboSection>
                <SizeOrder>
                    <TitleSection>Size</TitleSection>
                    <Divider></Divider>
                    <Form>
                        {
                            sizes.length > 0 &&
                            sizes.map((size: Item) => {
                                return (
                                    <ItemSection key={size.id}>
                                        <RadioButton type="radio" value={size.title} checked={sizeSelected === size.title} onChange={handleOptionChangeSize} />
                                        {size.title}
                                    </ItemSection>
                                )
                            })
                        }
                    </Form>
                </SizeOrder>
                <SodasOrder>
                    <TitleSection>Sodas flavours</TitleSection>
                    <Divider></Divider>
                    <Form column={true}>
                        {
                            flavours.length > 0 &&
                            flavours.map((flavour: Item) => {
                                return (
                                    <ItemSection key={flavour.id}>
                                        <RadioButton type="radio" value={flavour.title} checked={sodaSelected === flavour.title} onChange={handleOptionChangeFlavours} />
                                        {flavour.title}
                                    </ItemSection>
                                )
                            })
                        }
                    </Form>
                </SodasOrder>
            </ComboSection>
            <ToppingsSection>
                <TitleSection>Toppings</TitleSection>
                <Divider></Divider>
                <Form column={true}>
                    {
                        toppings.length > 0 &&
                        toppings.map((topping: Item) => {
                            return (
                                <ItemSection key={topping.id}>
                                    <Checkbox
                                        onChange={() => toggleCheckbox(topping)}
                                    />
                                    {topping.title}
                                </ItemSection>
                            )
                        })
                    }

                </Form>
            </ToppingsSection>
        </ComboGroup>


    );
}

export default Group;
