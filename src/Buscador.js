import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";

const Buscador = ({
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
  handleCargar,
  handleListarDocumentos,
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
          size="medium"
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
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color="default"
          size="large"
          component="label"
        >
          cargar documento
          <input onChange={handleCargar} type="File" hidden />
        </Button>
        <Button
          startIcon={<ListIcon />}
          variant="contained"
          color="default"
          size="large"
          component="label"
          onClick={handleListarDocumentos}
        >
          mostrar documentos
        </Button>
      </form>
    </div>
  );
};

export default Buscador;
