import { Wrapper, Behind, BurgerBG, Front } from './styles'

interface Props {
    colorfill?: boolean,
    removeBackground?: boolean;
}

const Chunk: React.FC<Props> = ({ colorfill, removeBackground, children }) => {

    return (
        <Wrapper colorFill={colorfill}>
            <Behind backgroundFill={removeBackground}>
                <BurgerBG rotateImg={true} />
                <BurgerBG />
            </Behind>
            <Front>
                {children}
            </Front>
        </Wrapper>
    );
}

export default Chunk;
