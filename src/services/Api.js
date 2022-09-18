import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const createSession = async (email, senha) => {
  return api.post("/usuario/login", { email, senha });
};

export const createUser = async (email, nome, senha) => {
  return api.post("/usuario/cadastrar", { email, nome, senha });
};
