import React from "react";
import ListaDocumentos from "./ListaDocumentos";

const Busqueda = ({ handleAbrir, documentos }) => {
  return (
    <div>
      <h1> Motor de busqueda DLC</h1>
      <ListaDocumentos documentos={documentos} handleAbrir={handleAbrir} />
    </div>
  );
};

export default Busqueda;
