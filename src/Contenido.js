import React from "react";
import "./Contenido.css";

const Contenido = ({ texto, titulo }) => {
  return (
    <div>
      <h2>Contenido</h2>
      <h3>{titulo}</h3>
      <div className="display-linebreak">{texto}</div>
    </div>
  );
};

export default Contenido;
