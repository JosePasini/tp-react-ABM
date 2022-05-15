import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar"
import { Instrumentos } from "./components/Instrumentos"

const url = "http://localhost:8080/instrumento/getAll"


function App() {
  const [instrumentos, setInstrumentos] = useState([]);

  const obtenerDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const instrumento = data
    setInstrumentos(...instrumentos, instrumento)
    setInstrumentos(data)
    console.log(instrumentos)
  }

  useEffect(() => {
    obtenerDatos();
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" instrumentos={instrumentos} />
      <div className="container">
        <Instrumentos instrumentos={instrumentos} />
      </div>

    </>
  );
}

export default App;
