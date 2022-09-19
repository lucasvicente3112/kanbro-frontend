import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cadastroTime from "./cadastroTime";

import "./CriarTimeStyle.css";

const PaginaLogin = () => {
  const navigate = useNavigate();
  const [nomeTime, setNomeTime] = useState("");

  const email = localStorage.getItem("email");

  const time = {
    nome: `${nomeTime}`,
    usuarios: [
      {
        email: `${email}`,
      },
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    cadastroTime(time);
    navigate("/home");
  };

  return (
    <div id="criarTime">
      <h1 className="title">Para continuar é necessário cadastrar um time</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="nome">Nome do time</label>
          <input
            type="nome"
            name="nome"
            id="nome"
            value={nomeTime}
            onChange={(event) => setNomeTime(event.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default PaginaLogin;
