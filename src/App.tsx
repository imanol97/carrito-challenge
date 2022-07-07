import { useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComoponet";
import Provider from './components/Aplication/Provider'

function App() {
  const [showCarrito, setShowCarrito] = useState(false);
  const [diamantes, setDiamante] = useState(3)

  return (
    <Provider>
      <div
        className="min-h-full bg-fixed"
        style={{ backgroundImage: "url(background.webp)" }}
      >
        <HeaderComponent diamantes={diamantes} setShowCarrito={setShowCarrito}/>
        <div className="flex justify-center min-h-full">
          <div className="max-w-lg w-full py-16">
            {showCarrito ? <CarritoComponent diamantes={diamantes} setDiamante={setDiamante} setShowCarrito={setShowCarrito}/> : <ListadoProductosComponent diamantes={diamantes} setDiamante={setDiamante}/>}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
