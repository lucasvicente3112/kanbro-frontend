import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cadastro from "./cadastro";
import BoxLateral from "../../assets/BoxLateral";
import { Button, TextField } from "@mui/material";
import { recuperaUsuarioComTime } from "../../services/Api";

import "./PaginaCadastroStyle.css";

const PaginaCadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    cadastro(email, nome, senha);

    localStorage.setItem("email", email);
    localStorage.setItem("usuario", nome);

    navigate("/menu-time");
  };

  return (
    <>
      <div id="cadastro">
        <BoxLateral />
        <h1 className="title">Cadastro</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="nome">Nome</label>
            <input
              type="nome"
              name="nome"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <div className="actions">
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              size="small"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaginaCadastro;
