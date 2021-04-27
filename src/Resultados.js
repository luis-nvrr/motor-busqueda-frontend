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
        <Typography variant="subtitle1"> Resultados </Typography>
        <ListaDocumentos
          documentos={documentos}
          handleAbrir={handleAbrir}
          handleDescargar={handleDescargar}
          handleMostrarInfo={handleMostrarInfo}
        />
        <InfoDocumento
          titulo={visualizado.nombre}
          frecuencia={visualizado.frecuencia}
        />
      </div>
    );
  }
  return <div></div>;
};

export default Resultados;
