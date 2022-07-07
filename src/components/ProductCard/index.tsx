import {CardContainer, ProductTitle, ProductDescription, TextContainer, Icon, IconContainer, ButtonContainer, ChipValue, ChipValueContainer} from './styles'
import { Button } from '../Button'
import { useContext } from 'react';
import { AppContext } from '../Aplication/Provider';

interface Props {
    title: string;
    description: string;
    icon: string;
    price: number;
    id: number;
    diamantes: number;
    setDiamante: any;
    products: any;
}


export const ProductCard: React.FC<Props> = ({diamantes,setDiamante,title,products, description, icon, price, id}) => {
    const [state, setState] = useContext(AppContext);
    const filtro = products.filter((product: { id: number; }) => product.id === id)

    const onChange = () => {
        setState([...state,...filtro])
        setDiamante(diamantes - filtro[0].precio)
    }

    return (
        <CardContainer>
            <TextContainer>
                <ChipValueContainer>
                    <ChipValue>{price === 1 ? <p>{price} Gema</p> : <p>{price} Gemas</p>}</ChipValue>
                </ChipValueContainer>
                <IconContainer>
                    <Icon src={icon} />
                </IconContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ButtonContainer>
                    { diamantes < filtro[0]?.precio || state.find( (product: { id: number; }) => product.id === filtro[0].id ) ?
                        <Button isActive={true} text="Agregar" onChange={() => onChange()}/>
                        :
                        <Button isActive={false} text="Agregar" onChange={() => onChange()}/>
                    }
                </ButtonContainer>
            </TextContainer>
        </CardContainer>
    );
  };
