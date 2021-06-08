import axios from "axios";
const baseUrl =
  "http://localhost:8080/motor-busqueda-dlc-api-1.0-SNAPSHOT/api/documentos";

const getDocumentoByTermino = (termino) => {
  const request = axios.get(`${baseUrl}/terminos/${termino}`);
  return request.then((response) => response.data);
};

const getDocumentoByNombre = (nombre) => {
  return axios({
    method: "get",
    url: `${baseUrl}/${nombre}`,
    responseType: "blob",
  });
};

const saveDocumento = (documento) => {
  return axios
    .post(`${baseUrl}`, documento, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

const getDocumentos = () => {
  const request = axios.get(`${baseUrl}`);
  return request.then((response) => response.data);
};

export default {
  getDocumentoByTermino,
  getDocumentoByNombre,
  saveDocumento,
  getDocumentos,
};
