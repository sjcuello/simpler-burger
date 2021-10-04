import { Button, Title } from "../globalStyles"
import { Wrapper } from "./styles"

interface Props {
    toggle: any
}

const CartEmpty: React.FC<Props> = ({ toggle }) => {
    return (
        <Wrapper>
            <Title>Your Cart is empty !</Title>
            <Button
                enabled={true}
                widthButton="80%"
                backgroundColor="#F01C4F"
                onClick={() => toggle()}
            >
                Close
            </Button>
        </Wrapper>
    )
}

export default CartEmpty