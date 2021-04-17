import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Buscador = ({
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
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
      </form>
    </div>
  );
};

export default Buscador;
