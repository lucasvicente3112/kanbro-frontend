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

export const criarQuadro = async (idTime) => {
  return api.post("/quadro/cadastrar", idTime);
};

export const recuperaUsuarioComTime = async (email) => {
  return api.get(`/usuario/email/${email}/time`);
};

export const adicionarMembroEmTime = async (email, idTime) => {
  return api.post(`/time/${idTime}/adicionar/${email}`);
};

export const recuperaUsuariosDoTime = async (idTime) => {
  return api.get(`/usuario/time/${idTime}`);
};
