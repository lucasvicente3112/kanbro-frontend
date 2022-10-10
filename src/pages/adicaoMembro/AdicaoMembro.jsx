import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { adicionarMembroEmTime } from "../../services/Api";
import "./AdicaoMembro.css";

const AdicaoMembro = () => {
  let { idTime } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const navegarQuadro = () => {
    navigate(`/quadro/${idTime}`);
  };

  const handleSubmit = async () => {
    const response = await adicionarMembroEmTime(email, idTime);
  };

  return (
    <div id="adicaoMembro">
      <h1 className="title">
        Por gentileza insira o e-mail do membro que será adicionado
      </h1>
      <form className="form">
        <div className="field">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            size="small"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="divSpacing">
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            size="small"
          >
            Adicionar
          </Button>
        </div>
        <div>
          <Button
            onClick={() => navegarQuadro()}
            variant="contained"
            size="small"
          >
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdicaoMembro;
