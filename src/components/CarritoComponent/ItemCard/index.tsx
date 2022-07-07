/* eslint-disable jsx-a11y/alt-text */
import {Container, IconContainer, ButtonDelete} from './styles'
import { useContext } from 'react';
import { AppContext } from '../../Aplication/Provider';

interface Props {
    id: number;
    imagen: any;
    nombre: any;
    setDiamante: any;
    diamantes: number;
}

export const ItemCard: React.FC<Props> = ({id, imagen, nombre, diamantes, setDiamante}) => {
    const [state, setState] = useContext(AppContext);
    let filteredElement = state.filter((value: { id: number; }) => value.id === id);
    let filteredArray = state.filter((value: { id: number; }) => value.id !== id);
    const deleteItem = () => {
        setState(filteredArray)
        setDiamante(diamantes + filteredElement[0].precio)
    }
    return (
        <Container key={id}>
            <IconContainer><img src={imagen}/></IconContainer>
            <span>{nombre}</span>
            <ButtonDelete onClick={deleteItem}>X</ButtonDelete>
        </Container>
    )
}
