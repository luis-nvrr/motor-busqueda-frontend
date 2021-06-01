import React from "react";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";

const areEqual = (prevProps, nextProps) => {
  return prevProps.titulo === nextProps.titulo;
};

const InfoDocumento = ({ titulo, indice }) => {
  const truncado = Math.trunc(indice * 100) / 100;
  if (titulo) {
    return (
      <div>
        <Typography variant="h5">Informacion de posteo</Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              indice de relevancia: {truncado}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">documento: {titulo}</Typography>
          </ListItem>
        </List>
      </div>
    );
  }
  return <div></div>;
};

export default React.memo(InfoDocumento, areEqual);
