import "./assets/css/App.css";
import { useState } from "react";
//IMPORTAR COMPONENTES
import Card from "./componentes/MiComponente";
export default function App() {
  function Contador() {
    const [contadorValue, actualizarContador] = useState(0);
    const [numeroDeVeces, actualizarVeces] = useState(0);

    return (
      <div>
        <span>{contadorValue}</span>
        <button
          onClick={() => {
            actualizarContador(contadorValue + 5);
            actualizarVeces(numeroDeVeces + 1);
          }}
        >
          Incrementar +{" "}
        </button>

        <button
          onClick={() => {
            actualizarContador(contadorValue - 5);
            actualizarVeces(numeroDeVeces + 1);
          }}
        >
          Decrementar -{" "}
        </button>

        <p> Veces utilizado: {numeroDeVeces}</p>
        <hr />
      </div>
    );
  }

  const pelicula = {
    id: 1,
    titulo: "Harry Potter",
    url: "https://imgs.search.brave.com/QREcVrt0VeCcptuthif2dAYv959CcTnPi0g4fHlQtRg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZXZlcnlleWUu/aXQvaW1nLW5vdGl6/aWUvaGFycnktcG90/dGVyLTI1LWN1cmlv/c2l0YS1ub24tc2Fw/ZXRlLWNhc3Qtc2Fn/YS12My00Mzc5MzEu/anBn",
    contenido: "Harry Potter y la Órden del Fenix",
  };

  return (
    <div>
      <Contador />
      <Card
        id={pelicula.id}
        key={pelicula.id}
        url={pelicula.url}
        titulo={pelicula.titulo}
        contenido={pelicula.contenido}
      />
    </div>
  );
}
