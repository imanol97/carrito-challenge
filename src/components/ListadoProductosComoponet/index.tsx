import { useState, useEffect } from 'react'
import { ProductCard } from '../ProductCard'
import { Container } from './styles'

interface Props {
  diamantes: number;
  setDiamante: any;
}

export const ListadoProductosComponent: React.FC<Props> = ({diamantes, setDiamante}) => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then((response) => {
        return response.json()
      })
      .then((products) => {
        setProducts(products)
      })
  }, [])

  return (
    <Container>
      {
        products.map((product) => {
          return <ProductCard diamantes={diamantes} setDiamante={setDiamante} products={products} key={product.id} id={product.id} title={product.nombre} description={product.descripcion} icon={product.imagen} price={product.precio}/>
        })
      }
    </Container>
  );
};
