import React from "react";
import ItemDocumento from "./ItemDocumento";

const ListaDocumentos = ({
  documentos,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
}) => {
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

export default ListaDocumentos;
