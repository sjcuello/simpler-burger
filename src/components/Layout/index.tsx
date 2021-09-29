import Banner from '../Banner';
import Footer from '../Footer';
import Chunk from '../Chunk';
import Section from '../Section';
import { Container } from './styles'

const Layout = () => {

    return (
        <Container>
            <Chunk colorfill={true}>
                <Banner />
                <Section link="combos" />
            </Chunk>
            <Chunk>
                <Section link="burgers" />
            </Chunk>
            <Chunk removeBackground={true}>
                <Section link="others" />
            </Chunk>
            <Footer/>
        </Container>
    );
}

export default Layout;
