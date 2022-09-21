import React from "react";
import { useNavigate } from "react-router-dom";
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
    <div id="menuTime">
      <h1 className="title">Você não faz parte de um time:</h1>

      <div className="actions">
        <button onClick={() => navegarCriarTime()}>Criar</button>
        <button onClick={() => navegarTelaEspera()}>Esperar Convite</button>
      </div>
    </div>
  );
};

export default MenuTime;
