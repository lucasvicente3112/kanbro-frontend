import { api, criarQuadro } from "../../services/Api";

const cadastroQuadro = async (idTime) => {
  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  const response = await criarQuadro(idTime);
  return response.data;
};

export default cadastroQuadro;
