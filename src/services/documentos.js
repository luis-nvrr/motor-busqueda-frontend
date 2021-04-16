import axios from "axios";
const baseUrl =
  "http://localhost:8080/motor-busqueda-dlc-api-1.0-SNAPSHOT/api/hello-world";

const getBuscados = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default {
  getBuscados,
};
