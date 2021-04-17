import Button from "./Button";

const ItemDocumento = ({
  documento,
  handleAbrir,
  handleDescargar,
  handleMostrarInfo,
}) => {
  return (
    <div>
      {documento.nombre}
      <Button text="info" onClick={handleMostrarInfo(documento)} />{" "}
      <Button text="abrir" onClick={handleAbrir(documento)} />{" "}
      <Button text="descargar" onClick={handleDescargar(documento)} />
    </div>
  );
};

export default ItemDocumento;
