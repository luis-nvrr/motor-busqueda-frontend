import React from "react";

import Resultados from "./Resultados";

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.documentos === nextProps.documentos &&
    prevProps.visualizado === nextProps.visualizado
  );
};

const Busqueda = ({
  handleAbrir,
  documentos,
  handleDescargar,
  handleMostrarInfo,
  visualizado,
}) => {
  console.log("busqueda");
  return (
    <div>
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

export default React.memo(Busqueda, areEqual);
