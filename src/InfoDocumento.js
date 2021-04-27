import React from "react";
import Typography from "@material-ui/core/Typography";
import {List, ListItem} from '@material-ui/core'

const InfoDocumento = ({ titulo, indice, path }) => {
  const truncado = Math.trunc(indice*100) / 100
  if (titulo) {
    return (
      <div>
        <Typography variant="h5">Informacion de posteo</Typography>
        <List>
          <ListItem>
            <Typography variant="body1">indice de relevancia: {truncado}</Typography>
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

export default InfoDocumento;
