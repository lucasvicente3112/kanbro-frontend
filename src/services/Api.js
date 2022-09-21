import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const criarSessao = async (email, senha) => {
  return api.post("/usuario/login", { email, senha });
};

export const criarUsuario = async (email, nome, senha) => {
  return api.post("/usuario/cadastrar", { email, nome, senha });
};

export const criarTime = async (time) => {
  return api.post("/time/cadastrar", time);
};

export const recuperaTime = async (email) => {
  return api.get(`/usuario/email/${email}/time`);
};
