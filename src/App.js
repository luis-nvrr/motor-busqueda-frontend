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
    documentoService
    .getDocumentoText(documento.nombre)
    .then((documentoBuscado) => setAbierto(documentoBuscado) )
  };

  const handleMostrarInfo = (documento) => () => {
    setAbierto({})
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
    clearAll()
    event.preventDefault();
    documentoService
      .getDocumentoByTermino(buscado)
      .then((documentosRecuperados) => setDocumentos(documentosRecuperados))
      .catch((error) => console.log(error));
  };

  const clearAll = () =>{
    setDocumentos([])
    setAbierto({})
    setVisualizado({})
  }

  const handleDescargar = (documento) => () => {
    documentoService.getDocumentoByNombre(documento.nombre).then((response) => {
      let blob = new Blob([response.data], { type: "plain/text" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${documento.nombre}`;
      link.click();
    });
  };

  const handleCargar = (event) => {
    event.preventDefault();

    let formData = new FormData();
    const file = event.target.files[0];

    if(event.target.files.length === 0) {return;}

    formData.append("file", file)
    console.log(file);
    
    documentoService.saveDocumento(formData)
    .then((response) => {
      console.log(response)
      alert("Archivo cargado!")
    })
    .catch("Error en la carga del archivo");
  }

  const clearBuscado = () => () => {
    setBuscado("");
    setDocumentos([]);
  };

  return (
    <Container>
      <div>
        <Grid
          container
          spacing={8}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xl={12} style={{paddingLeft: 0, paddingRight: 0}}>
            <Busqueda
              handleAbrir={handleAbrir}
              documentos={documentos}
              handleBuscarChange={handleBuscarChange}
              buscado={buscado}
              clearBuscado={clearBuscado}
              handleBuscarSubmit={handleBuscarSubmit}
              handleDescargar={handleDescargar}
              handleMostrarInfo={handleMostrarInfo}
              handleCargar={handleCargar}
              visualizado={visualizado}
            />
          </Grid>
          <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0}}>
            <Contenido texto={abierto.texto} titulo={abierto.nombre} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
