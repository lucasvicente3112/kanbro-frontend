import { api, criarUsuario } from "../../services/Api";

const cadastro = async (email, nome, senha) => {
  await criarUsuario(email, nome, senha);
  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export default cadastro;
