import React from "react";
import ListaDocumentos from "./ListaDocumentos";
import Typography from "@material-ui/core/Typography";

const areEqual = (prevProps, nextProps) => {
  return prevProps.documentos === nextProps.documentos;
};

const Resultados = ({
  documentos,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
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
        />
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h5"> No hay resultados!</Typography>
    </div>
  );
};

export default React.memo(Resultados, areEqual);
