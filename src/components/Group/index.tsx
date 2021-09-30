import useFetchFakeApi from "../../hooks/useFetchFakeApi";
import { Item } from "../../interfaces/Item";
import CheckboxForm from "../CheckboxForm";
import RadioButtonForm from "../RadioButtonForm";
import { ComboGroup, ComboTop, Divider, SizeOrder, SodasOrder, TitleSection, ToppingsSection } from "./styles";



const Group: React.FC = () => {

    const API = "http://localhost:3001/"

    const toppings: Item[] = useFetchFakeApi([], `${API}toppings`)

    const flavours: Item[] = useFetchFakeApi([], `${API}flavours`)

    const sizes: Item[] = useFetchFakeApi([], `${API}sizes`)

    return (
        <ComboGroup>
            <ComboTop>
                <SizeOrder>
                    <TitleSection>Size</TitleSection>
                    <Divider></Divider>
                    <RadioButtonForm list={sizes}/>
                </SizeOrder>
                <SodasOrder>
                    <TitleSection>Sodas flavours</TitleSection>
                    <Divider></Divider>
                    <RadioButtonForm list={flavours} column={true}/>
                </SodasOrder>
            </ComboTop>
            <ToppingsSection>
                <TitleSection>Toppings</TitleSection>
                <Divider></Divider>
                <CheckboxForm list={toppings} column={true}/>
            </ToppingsSection>
        </ComboGroup>


    );
}

export default Group;
