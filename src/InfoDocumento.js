import React from "react";

const InfoDocumento = ({ titulo, frecuencia }) => {
  return (
    <div>
      <h2>Informacion de posteo</h2>
      <h3>{titulo}</h3>
      <p>{frecuencia}</p>
    </div>
  );
};

export default InfoDocumento;
