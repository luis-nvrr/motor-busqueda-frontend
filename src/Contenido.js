import React from "react";
import "./Contenido.css";
import Typography from "@material-ui/core/Typography";
const Contenido = ({ texto, titulo }) => {
  if (texto) {
    return (
      <div>
        <Typography variant="h5">Contenido</Typography>
        <Typography variant="overline">{titulo}</Typography>
        <Typography
          variant="body1"
          paragraph={true}
          className="display-linebreak"
        >
          {texto}
        </Typography>
      </div>
    );
  }
  return <div></div>;
};

export default Contenido;
