import React from "react";
import ItemDocumento from "./ItemDocumento";

const ListaDocumentos = ({ documentos, handleAbrir }) => {
  return (
    <div>
      {documentos.map((documento) => (
        <ItemDocumento
          documento={documento}
          key={documento.nombre}
          handleAbrir={handleAbrir}
        />
      ))}
    </div>
  );
};

export default ListaDocumentos;
