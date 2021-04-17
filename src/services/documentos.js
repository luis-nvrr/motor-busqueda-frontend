import axios from "axios";
const baseUrl =
  "http://localhost:8080/motor-busqueda-dlc-api-1.0-SNAPSHOT/api/documentos";

const getDocumentoByTermino = (termino) => {
  const request = axios.get(`${baseUrl}/${termino}`);
  return request.then((response) => response.data);
};

const getDocumentoByNombre = (nombre) => {
  return axios({
    method: "get",
    url: `${baseUrl}/${nombre}`,
    responseType: "blob",
  });
};
export default {
  getDocumentoByTermino,
  getDocumentoByNombre,
};
