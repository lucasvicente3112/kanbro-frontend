import React from "react";
import { useNavigate } from "react-router-dom";
import BoxLateral from "../../assets/BoxLateral";
import { Button } from "@mui/material";
import "./MenuTimeStyle.css";

const MenuTime = () => {
  const navigate = useNavigate();

  const navegarCriarTime = () => {
    navigate("/cadastro-time");
  };

  const navegarTelaEspera = () => {
    navigate("/espera");
  };
  return (
    <>
      <BoxLateral />
      <div id="menuTime">
        <h1 className="title">Você não faz parte de um time:</h1>

        <div className="actions">
          <Button
            onClick={() => navegarCriarTime()}
            variant="contained"
            size="small"
            style={{ marginRight: "0.5rem" }}
          >
            Criar
          </Button>
          <Button
            onClick={() => navegarTelaEspera()}
            variant="contained"
            size="small"
          >
            Esperar Convite
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuTime;
