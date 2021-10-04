import React from "react";
import useFetchFakeApi from "../../hooks/useFetchFakeApi";
import { Additions} from "../../interfaces/Additions";
import { Item } from "../../interfaces/Item";
import CheckboxForm from "../CheckboxForm";
import RadioButtonForm from "../RadioButtonForm";
import { ComboGroup, ComboTop, Divider, SizeOrder, SodasOrder, TitleSection, ToppingsSection } from "./styles";

interface Props {
    additions: Additions
}

const Group: React.FC<Props> = ({ additions }) => {

    const API = "http://localhost:3001/"

    const toppings: Item[] = useFetchFakeApi([], `${API}toppings`)
    const flavours: Item[] = useFetchFakeApi([], `${API}flavours`)
    const sizes: Item[] = useFetchFakeApi([], `${API}sizes`)

    

    const sections = ():number => {
        const first = (additions.sizes || additions.flavours) ? 1 : 0
        const second = additions.toppings ? 1 : 0
        return first + second
    }

    return (
        <ComboGroup sections={sections()}>
            {
                (additions.sizes || additions.flavours) &&
                <ComboTop>
                    {
                        additions.sizes &&
                        <SizeOrder>
                            <TitleSection>Size</TitleSection>
                            <Divider></Divider>
                            <RadioButtonForm list={sizes} sizes={true}/>
                        </SizeOrder>
                    }
                    {
                        additions.flavours &&
                        <SodasOrder>
                            <TitleSection>Sodas flavours</TitleSection>
                            <Divider></Divider>
                            <RadioButtonForm list={flavours} column={true} flavours={true}/>
                        </SodasOrder>
                    }

                </ComboTop>
            }
            {
                additions.toppings &&
                <ToppingsSection>
                    <TitleSection>Toppings</TitleSection>
                    <Divider></Divider>
                    <CheckboxForm list={toppings} column={true} />
                </ToppingsSection>
            }
        </ComboGroup>


    );
}

export default Group;
