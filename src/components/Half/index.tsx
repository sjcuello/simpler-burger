import { Wrapper, Behind, BurgerBG, Front } from './styles'

interface Props {
    colorfill?: boolean
}

const Half: React.FC<Props> = ({ colorfill, children }) => {

    return (
        <Wrapper colorFill={colorfill}>
            <Behind>
                <BurgerBG rotateImg={true} />
                <BurgerBG />
            </Behind>
            <Front>
                {children}
            </Front>
        </Wrapper>
    );
}

export default Half;
