import React from "react";
import "./Contenido.css";

const Contenido = ({ texto, titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className="display-linebreak">{texto}</div>
    </div>
  );
};

export default Contenido;
