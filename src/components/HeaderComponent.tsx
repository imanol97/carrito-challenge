/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';
import { AppContext } from './Aplication/Provider';
interface Props {
  setShowCarrito: any;
  diamantes: number;
}

export const HeaderComponent: React.FC<Props> = ({setShowCarrito, diamantes}) => {
  const [state] = useContext(AppContext);

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span>{diamantes === 1 ? `${diamantes} Gema` : `${diamantes} Gemas`}</span>
      </div>
      <button className="text-white hover:underline" onClick={() => setShowCarrito(true)} >Ver Carrito ({state.length})</button>
    </div>
  );
};
