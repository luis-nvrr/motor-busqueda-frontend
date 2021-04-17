import axios from "axios";
const baseUrl = "http://localhost:3001/api/documento";

const getDocumentoByTermino = (termino) => {
  const request = axios.get(`http://localhost:3001/api/termino/${termino}`);
  return request.then((response) => response.data);
};

const getDocumentoByNombre = (nombre) => {
  return axios({
    method: "get",
    url: `http://localhost:3001/api/documento/${nombre}`,
    responseType: "blob",
  });
};
export default {
  getDocumentoByTermino,
  getDocumentoByNombre,
};
