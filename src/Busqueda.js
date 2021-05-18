import React from "react";
import Buscador from "./Buscador";
import Typography from "@material-ui/core/Typography";
import Resultados from "./Resultados";
import AppBar from "@material-ui/core/AppBar";

const Busqueda = ({
  handleAbrir,
  documentos,
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
  handleDescargar,
  handleMostrarInfo,
  handleCargar,
  handleListarDocumentos,
  visualizado,
}) => {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h5" color="inherit">
          {" "}
          Motor de Busqueda
        </Typography>
      </AppBar>
      <br></br> <br></br>
      <Buscador
        buscado={buscado}
        handleBuscarChange={handleBuscarChange}
        clearBuscado={clearBuscado}
        handleBuscarSubmit={handleBuscarSubmit}
        handleCargar={handleCargar}
        handleListarDocumentos={handleListarDocumentos}
      />
      <br></br>
      <br></br>
      <Resultados
        documentos={documentos}
        handleAbrir={handleAbrir}
        handleDescargar={handleDescargar}
        handleMostrarInfo={handleMostrarInfo}
        visualizado={visualizado}
      />
    </div>
  );
};

export default Busqueda;
