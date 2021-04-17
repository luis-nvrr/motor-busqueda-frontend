import React from "react";

const InfoDocumento = ({ titulo, frecuencia }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{frecuencia}</p>
    </div>
  );
};

export default InfoDocumento;
