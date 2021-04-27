import React, { useState, useEffect } from "react";
import documentoService from "./services/documentos";
import Busqueda from "./Busqueda";
import Contenido from "./Contenido";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function App() {
  const [documentos, setDocumentos] = useState([]);
  const [abierto, setAbierto] = useState({});
  const [buscado, setBuscado] = useState("");
  const [visualizado, setVisualizado] = useState({});

  const handleAbrir = (documento) => () => {
    if (abierto.nombre === documento.nombre) {
      setAbierto({});
      return;
    }
    setAbierto(documento);
  };

  const handleMostrarInfo = (documento) => () => {
    if (documento.nombre === visualizado.nombre) {
      setVisualizado({});
      return;
    }
    setVisualizado(documento);
  };

  const handleBuscarChange = (event) => {
    event.preventDefault();
    const buscado = event.target.value;
    setBuscado(buscado);
  };

  const handleBuscarSubmit = (event) => {
    event.preventDefault();
    documentoService
      .getDocumentoByTermino(buscado)
      .then((documentosRecuperados) => setDocumentos(documentosRecuperados))
      .catch((error) => console.log(error));
  };

  const handleDescargar = (documento) => () => {
    documentoService.getDocumentoByNombre(documento.nombre).then((response) => {
      let blob = new Blob([response.data], { type: "plain/text" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${documento.nombre}`;
      link.click();
    });
  };

  const clearBuscado = () => () => {
    setBuscado("");
    setDocumentos([]);
  };

  return (
    <Container>
      <div>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xl={12}>
            <Busqueda
              handleAbrir={handleAbrir}
              documentos={documentos}
              handleBuscarChange={handleBuscarChange}
              buscado={buscado}
              clearBuscado={clearBuscado}
              handleBuscarSubmit={handleBuscarSubmit}
              handleDescargar={handleDescargar}
              handleMostrarInfo={handleMostrarInfo}
              visualizado={visualizado}
            />
          </Grid>
          <Grid item xs={12}>
            <Contenido texto={abierto.texto} titulo={abierto.nombre} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
