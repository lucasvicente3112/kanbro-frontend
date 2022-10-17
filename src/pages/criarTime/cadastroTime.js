import { api, criarTime } from "../../services/Api";

const cadastroTime = async (time) => {
  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  const response = await criarTime(time);
  return response.data;
};

export default cadastroTime;
