import React from "react";
import ListaDocumentos from "./ListaDocumentos";
import Buscador from "./Buscador";
import Typography from "@material-ui/core/Typography";

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
      <Typography variant="h4"> Motor de Busqueda</Typography>
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
