import { Product } from "../../interfaces/Product"
import {  Wraper } from "./styles"

interface Props {
    data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
    return(
        <Wraper>
        </Wraper>
    )
}

export default Card