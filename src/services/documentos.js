import axios from "axios";

const getDocumentoByTermino = (termino) => {
  const request = axios.get(`http://localhost:8080/motor-busqueda-dlc-api-1.0-SNAPSHOT/api/documentos/${termino}`);
  return request.then((response) => response.data);
};

const getDocumentoByNombre = (nombre) => {
  return axios({
    method: "get",
    url: `http://localhost:8080/motor-busqueda-dlc-api-1.0-SNAPSHOT/api/documento/${nombre}`,
    responseType: "blob",
  });
};
export default {
  getDocumentoByTermino,
  getDocumentoByNombre,
};
