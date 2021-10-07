import useFetchFakeApi from "../../hooks/useFetchFakeApi"
import { Product } from "../../interfaces/Product"
import { SectionList } from "../../interfaces/SectionList"
import Card from "../Card"
import { List, Logo, Image, Wrapper } from "./styles"

interface Props {
    link: string;
}


const Section: React.FC<Props> = ({ link }) => {

    const API = "http://localhost:3001/"

    const datos: SectionList = useFetchFakeApi([], `${API}${link}`)

    const { logo, products } = datos;

    return (
        <Wrapper>
            <Logo>
                <Image src={logo} />
            </Logo>
            <List>
                {
                    products?.length &&
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