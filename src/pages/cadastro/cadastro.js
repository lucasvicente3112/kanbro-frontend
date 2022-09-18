import { api, createUser } from "../../services/Api";

const cadastro = async (email, nome, senha) => {
  await createUser(email, nome, senha);
  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export default cadastro;
