import React from "react";
import Buscador from "./Buscador";
import Typography from "@material-ui/core/Typography";
import Resultados from "./Resultados";

const Busqueda = ({
  handleAbrir,
  documentos,
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
  handleDescargar,
  handleMostrarInfo,
  visualizado,
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
      <br></br><br></br>  
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
