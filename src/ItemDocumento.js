import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

const ItemDocumento = ({
  documento,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
}) => {
  return (
    <div>
      <Typography display="block" variant="overline">
        {documento.nombre}
      </Typography>

      <ButtonGroup>
        <Button
          startIcon={<InfoIcon />}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleMostrarInfo(documento)}
        >
          info
        </Button>
        <Button
          startIcon={<DescriptionIcon />}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAbrir(documento)}
        >
          abrir
        </Button>
        <Button
          startIcon={<CloudDownloadIcon />}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleDescargar(documento)}
        >
          descargar
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemDocumento;
