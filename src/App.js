import React, { useState } from "react";
import documentoService from "./services/documentos";
import Resultados from "./Resultados";
import Contenido from "./Contenido";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Buscador from "./Buscador";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/styles";
import InfoDocumento from "./InfoDocumento";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
  },
  box: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "400px",
  },
  innerContainer: {
    height: "100%",
  },
  item: {
    flex: 1,
  },
});

function App() {
  const classes = useStyles();
  const [documentos, setDocumentos] = useState([]);
  const [abierto, setAbierto] = useState("");
  const [abiertoNombre, setAbiertoNombre] = useState("");
  const [buscado, setBuscado] = useState("");
  const [visualizado, setVisualizado] = useState({});

  const handleAbrir = (documento) => () => {
    if (documento.nombre === abiertoNombre) {
      setAbiertoNombre("");
      setAbierto("");
      return;
    }
    documentoService.getDocumentoByNombre(documento.nombre).then((response) => {
      let blob = new Blob([response.data], { type: "plain/text" });
      identificarEncoding(documento.nombre, blob);
    });
  };

  const identificarEncoding = (nombre, blob, utf8 = true) => {
    let reader = new FileReader();

    reader.addEventListener("loadend", (e) => {
      let result = e.target.result;
      if (utf8 && result.match(/�/)) {
        identificarEncoding(nombre, blob, false);
        console.log("The file encoding is not utf-8! Trying ISO-8859-3...");
        return;
      }
      setAbiertoNombre(nombre);
      setAbierto(result);
    });
    reader.readAsText(blob, utf8 ? "UTF-8" : "ISO-8859-3");
  };

  const handleMostrarInfo = (documento) => () => {
    setAbierto("");
    setAbiertoNombre("");
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
    clearAll();
    event.preventDefault();
    documentoService
      .getDocumentoByTermino(buscado)
      .then((documentosRecuperados) => setDocumentos(documentosRecuperados))
      .catch((error) => console.log(error));
  };

  const clearAll = () => {
    setDocumentos([]);
    setAbierto("");
    setAbiertoNombre("");
    setVisualizado({});
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

  const handleCargar = (event) => {
    event.preventDefault();

    let formData = new FormData();
    const file = event.target.files[0];

    if (event.target.files.length === 0) {
      return;
    }

    formData.append("file", file);
    console.log(file);

    documentoService
      .saveDocumento(formData)
      .then((response) => {
        console.log(response);
        alert("Archivo cargado!");
      })
      .catch((error) => {
        console.log("Error en la carga del archivo");
      });
  };

  const handleListarDocumentos = () => {
    clearBuscado();
    documentoService
      .getDocumentos()
      .then((documentsList) => {
        setDocumentos(documentsList);
      })
      .catch((error) => console.log(error));
  };

  const clearBuscado = () => () => {
    setBuscado("");
    setDocumentos([]);
  };

  return (
    <Container>
      <Grid container spacing={3} direction="row" align="center">
        <AppBar position="static">
          <Typography variant="h5" color="inherit">
            {" "}
            Motor de Busqueda
          </Typography>
        </AppBar>
        <Grid item xs={12}>
          <Buscador
            buscado={buscado}
            handleBuscarChange={handleBuscarChange}
            clearBuscado={clearBuscado}
            handleBuscarSubmit={handleBuscarSubmit}
            handleCargar={handleCargar}
            handleListarDocumentos={handleListarDocumentos}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.container}
        spacing={5}
        direction="row"
        justify="center"
      >
        <Grid item xs={4}>
          <Card elevation={10}>
            <CardContent>
              <Resultados
                handleAbrir={handleAbrir}
                documentos={documentos}
                handleDescargar={handleDescargar}
                handleMostrarInfo={handleMostrarInfo}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Grid container className={classes.container} spacing={3}>
            <Grid item xs={12}>
              <InfoDocumento
                titulo={visualizado.nombre}
                indice={visualizado.indice}
              />
            </Grid>
            <Grid item xs={12}>
              <Contenido texto={abierto} titulo={abiertoNombre} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
