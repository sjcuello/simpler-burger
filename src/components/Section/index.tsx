import { Product } from "../../interfaces/Product"
import { SectionList } from "../../interfaces/SectionList"
import Card from "../Card"
import { List } from "./styles"

interface Props {
    data: SectionList;
}

const Section: React.FC<Props> = ({ data }) => {

    const { logo, products } = data;
    console.log(`logo`, logo)
    return (
        <>
            {/*<Logo path={logo}/>*/}
            <List>
                {
                    products.map((product: Product) => {
                        return (
                            <Card key={product.id} data={product} />
                        )
                    })
                }

            </List>
        </>
    )
}

export default Section