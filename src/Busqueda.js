import React from "react";
import ListaDocumentos from "./ListaDocumentos";
import Buscador from "./Buscador";

const Busqueda = ({
  handleAbrir,
  documentos,
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
  handleDescargar,
  handleMostrarInfo,
}) => {
  return (
    <div>
      <h1> Motor de busqueda DLC</h1>
      <Buscador
        buscado={buscado}
        handleBuscarChange={handleBuscarChange}
        clearBuscado={clearBuscado}
        handleBuscarSubmit={handleBuscarSubmit}
      />
      <ListaDocumentos
        documentos={documentos}
        handleAbrir={handleAbrir}
        handleDescargar={handleDescargar}
        handleMostrarInfo={handleMostrarInfo}
      />
    </div>
  );
};

export default Busqueda;
