import { Product } from "../../interfaces/Product"
import { Card, List } from "./styles"

interface Props {
    data: Product[];
}

const Section: React.FC<Props> = ({ data }) => {
    return (
        <List>
            {
                data.map(item => {
                    return (
                        <Card>
                        </Card>
                    )
                })
            }

        </List>
    )
}

export default Section