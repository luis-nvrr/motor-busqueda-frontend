import React from "react";
import ListaDocumentos from "./ListaDocumentos";
import InfoDocumento from "./InfoDocumento";
import Typography from "@material-ui/core/Typography";

const Resultados = ({
  documentos,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
  visualizado,
}) => {
  if (documentos.length !== 0) {
    return (
      <div>
        <Typography variant="h5"> Resultados </Typography>
        <ListaDocumentos
          documentos={documentos}
          handleAbrir={handleAbrir}
          handleDescargar={handleDescargar}
          handleMostrarInfo={handleMostrarInfo}
        /><br></br><br></br> 
        <InfoDocumento
          titulo={visualizado.nombre}
          indice={visualizado.indice}
          path={visualizado.ubicacion}
        />
      </div>
    );
  }
  return <div></div>;
};

export default Resultados;
