import React, { useState, useEffect } from "react";
import documentoService from "./services/documentos";
import Busqueda from "./Busqueda";
import Contenido from "./Contenido";

function App() {
  const [documentos, setDocumentos] = useState([]);
  const [abierto, setAbierto] = useState({});

  useEffect(() => {
    documentoService
      .getBuscados()
      .then((documentosRecuperados) => setDocumentos(documentosRecuperados));
  }, []);

  const handleAbrir = (documento) => () => {
    setAbierto(documento);
  };

  console.log(abierto);

  return (
    <div>
      <Busqueda handleAbrir={handleAbrir} documentos={documentos} />
      <Contenido texto={abierto.texto} titulo={abierto.nombre} />
    </div>
  );
}

export default App;
