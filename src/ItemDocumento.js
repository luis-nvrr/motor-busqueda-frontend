import Button from "./Button";

const ItemDocumento = ({ documento, handleAbrir }) => {
  return (
    <div>
      {documento.nombre}
      <Button text="info" />{" "}
      <Button text="abrir" onClick={handleAbrir(documento)} />{" "}
      <Button text="descargar" />
    </div>
  );
};

export default ItemDocumento;
