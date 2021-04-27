import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const Buscador = ({
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
  handleCargar
}) => {
  return (
    <div>
      <form onSubmit={handleBuscarSubmit}>
        <TextField
          id="standard-basic"
          label="Buscar"
          value={buscado}
          onChange={handleBuscarChange}
          onBlur={clearBuscado}
        />
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          color="secondary"
          type="submit"
          size="large"
        >
          buscar
        </Button>
        <Button
          startIcon={<CloudUploadIcon/>}
          variant="contained"
          color="default"
          size="large"
          component="label"
        >
          cargar documento
          <input
          onChange={handleCargar}
          type="File"
          hidden
          />
        </Button>
      </form>
    </div>
  );
};

export default Buscador;
