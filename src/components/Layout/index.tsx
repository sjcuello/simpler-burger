import Banner from '../Banner';
import Half from '../Half';
import Section from '../Section';
import { Container } from './styles'

const Layout = () => {

    return (
        <Container>
            <Half colorfill={true}>
                <Banner />
                <Section link="combos" />
            </Half>
            <Half>
                <Section link="burgers" />
            </Half>
            <Half>
                <Section link="others" />
            </Half>
        </Container>
    );
}

export default Layout;
