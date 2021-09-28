import { Product } from "../../interfaces/Product"
import { SectionList } from "../../interfaces/SectionList"
import Card from "../Card"
import { List, Logo, Image, Wrapper } from "./styles"

interface Props {
    data: SectionList;
}


const Section: React.FC<Props> = ({ data }) => {

    const { logo, products } = data;

    return (
        <Wrapper>
            <Logo>
                <Image src={logo}/>
            </Logo>
            <List>
                {
                    products.map((product: Product) => {
                        return (
                            <Card key={product.id} data={product} />
                        )
                    })
                }
            </List>
        </Wrapper>
    )
}

export default Section