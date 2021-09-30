import { Sign } from "../globalStyles"
import { ButtonTemplate, Text } from "./styles"

interface Props {
    color?: string,
    text: string,
    price: number,
    toggle: any,

}

const Button: React.FC<Props> = ({ color, text, price, toggle, children }) => {
    return (
        <ButtonTemplate colorButton={color} onClick={ toggle }>
            {children}
            <Text flexItem={1.5}>
                {text}
            </Text>
            <Text>
                <Sign>USD</Sign>
                {price}
            </Text>
        </ButtonTemplate>
    )
}

export default Button