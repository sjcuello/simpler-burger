import React from "react";
import useGetGroup from "../../hooks/useGetGroups";
import { Additions, AdditionsSelected } from "../../interfaces/Additions";
import CheckboxForm from "../CheckboxForm";
import RadioButtonForm from "../RadioButtonForm";
import { ComboGroup, Divider, SizeOrder, SodasOrder, TitleSection, ToppingsSection } from "./styles";

interface Props {
    additions: Additions,
    additionsSelected?: AdditionsSelected
}

const Group: React.FC<Props> = ({ additions, additionsSelected }) => {

    const group = useGetGroup()

    const sections = (): number => {
        const first = (additions.sizes || additions.flavours) ? 1 : 0
        const second = additions.toppings ? 1 : 0
        return first + second
    }

    return (
        <ComboGroup sections={sections()}>

            {
                additions.sizes &&
                <SizeOrder >
                    <TitleSection>Size</TitleSection>
                    <Divider></Divider>
                    <RadioButtonForm
                        list={group.sizes}
                        sizes={true}
                        selected={additionsSelected?.size}
                    />
                </SizeOrder>
            }
            {
                additions.flavours &&
                <SodasOrder>
                    <TitleSection>Sodas flavours</TitleSection>
                    <Divider></Divider>
                    <RadioButtonForm
                        list={group.flavours}
                        column={true}
                        flavours={true}
                        selected={additionsSelected?.flavour}
                    />
                </SodasOrder>
            }
            {
                additions.toppings &&
                <ToppingsSection>
                    <TitleSection>Toppings</TitleSection>
                    <Divider></Divider>
                    <CheckboxForm
                        list={group.toppings}
                        column={true}
                        selected={additionsSelected?.toppings}
                    />
                </ToppingsSection>
            }
        </ComboGroup>
    );
}

export default Group;
