import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cadastroTime from "./cadastroTime";
import BoxLateral from "../../assets/BoxLateral";
import cadastroQuadro from "./cadastroQuadro";

import "./CriarTimeStyle.css";
import { Button } from "@mui/material";

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

  const handleSubmit = async () => {
    const idTime = await cadastroTime(time);
    const quadro = {
      time: `${idTime}`,
    };
    localStorage.setItem("idTime", idTime);
    localStorage.setItem("nomeTime", nomeTime);
    const idQuadro = await cadastroQuadro(quadro);
    if (idTime) {
      navigate(`/quadro/${idTime}`);
    }
  };

  return (
    <div id="criarTime">
      <BoxLateral />
      <h1 className="title">
        Para continuar <br /> é necessário cadastrar um time
      </h1>
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
  );
};

export default PaginaLogin;
