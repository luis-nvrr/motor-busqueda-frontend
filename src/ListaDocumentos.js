import React from "react";
import ItemDocumento from "./ItemDocumento";

const areEqual = (prevProps, nextProps) => {
  return prevProps.documentos === nextProps.documentos;
};

const ListaDocumentos = ({
  documentos,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
}) => {
  console.log("listado");
  return (
    <div>
      {documentos.map((documento) => (
        <ItemDocumento
          documento={documento}
          key={documento.nombre}
          handleAbrir={handleAbrir}
          handleDescargar={handleDescargar}
          handleMostrarInfo={handleMostrarInfo}
        />
      ))}
    </div>
  );
};

export default React.memo(ListaDocumentos, areEqual);
