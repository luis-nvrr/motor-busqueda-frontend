import React from "react";

const Buscador = ({
  buscado,
  handleBuscarChange,
  clearBuscado,
  handleBuscarSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleBuscarSubmit}>
        termino
        <input
          value={buscado}
          onChange={handleBuscarChange}
          onBlur={clearBuscado}
        />
        <button type="submit">buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
