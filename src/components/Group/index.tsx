import { useState } from "react";
import useFetchFakeApi from "../../hooks/useFetchFakeApi";
import { Item } from "../../interfaces/Item";
import { ComboGroup, ComboSection, SizeOrder, SodasOrder, TitleSection, ToppingsSection } from "./styles";

interface Props {
    colorfill?: boolean,
    removeBackground?: boolean;
}

const Group: React.FC<Props> = ({ }) => {

    const API = "http://localhost:3001/"

    const toppings: Item[] = useFetchFakeApi([], `${API}toppings`)

    const flavors: Item[] = useFetchFakeApi([], `${API}flavors`)

    const sizes: Item[] = useFetchFakeApi([], `${API}sizes`)


    const [selected, setSelected] = useState('option1')

    const handleOptionChange = (changeEvent: any) => {
        setSelected(changeEvent.target.value)
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        console.log('You have selected:', selected);
    }


    return (
        <ComboGroup>
            <ComboSection>
                <SizeOrder>
                    <TitleSection>Titulo</TitleSection>
                    <form onSubmit={handleFormSubmit}>
                        {
                            sizes.length > 0 &&
                            sizes.map((size: Item) => {
                                console.log(`sizes`, sizes)
                                return (
                                    <div key={size.id} className="radio">
                                        <label>
                                            <input type="radio" value={size.title} checked={selected === size.title} onChange={handleOptionChange} />
                                            {size.title}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        <button className="btn btn-default" type="submit">Save</button>
                    </form>
                </SizeOrder>
                <SodasOrder>

                </SodasOrder>
            </ComboSection>
            <ToppingsSection>

            </ToppingsSection>
        </ComboGroup>


    );
}

export default Group;
