import React from "react";
import Typography from "@material-ui/core/Typography";

const InfoDocumento = ({ titulo, frecuencia }) => {
  if (titulo) {
    return (
      <div>
        <Typography variant="h5">Informacion de posteo</Typography>
        <Typography variant="overline">{titulo}</Typography>
        <Typography variant="caption">{frecuencia}</Typography>
      </div>
    );
  }
  return <div></div>;
};

export default InfoDocumento;
