import { Container, ButtonContainer, ButtonSubmitContainer, CartEmpty} from './styles'
import { ItemCard } from './ItemCard/index'
import { Button } from '../Button'
import { useContext } from 'react';
import { AppContext } from '../Aplication/Provider';

interface Props {
  setShowCarrito?: any;
  setDiamante: any;
  diamantes: number;
}

export const CarritoComponent: React.FC<Props> = ({setShowCarrito, setDiamante, diamantes}) => {
  const [state] = useContext(AppContext);

  let confirmarCompras = state.map((item: any) => {
    return (item.id)
  })

    const enviarDatos = () => {fetch('http://localhost:3001/compras', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
        confirmarCompras
        })
    })}

    return (
      <Container>
        <ButtonContainer>
          <Button text="Volver" onChange={() => setShowCarrito(false)} />
        </ButtonContainer>
        {
          state.map((test: { imagen: any; nombre: string | number | boolean; id: any  }) => {
            return (
              <ItemCard diamantes={diamantes} setDiamante={setDiamante} key={test.id} id={test.id} nombre={test.nombre} imagen={test.imagen}/>
            )
          })
        }
        {state.length ?
        <ButtonSubmitContainer>
          <Button text="Comprar" onChange={enviarDatos()}/>
        </ButtonSubmitContainer>
        :
        <CartEmpty>El carrito se encuentra vacio</CartEmpty>
        }
      </Container>
    );
  };
