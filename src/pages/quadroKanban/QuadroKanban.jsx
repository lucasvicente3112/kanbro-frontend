import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../../Context/autenticacao";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./QuadroKanban.css";

const QuadroKanban = () => {
  let { idTime } = useParams();
  const { logout } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };
  const navegarAdicionarMembro = () => {
    navigate(`/quadro/adicionar-membros/${idTime}`);
  };
  const navegarListaMembros = () => {
    navigate(`/time/membros/${idTime}`);
  };

  return (
    <>
      <h2>Quadro do time {idTime}</h2>
      <div className="div">
        <Button onClick={() => handleLogout()} variant="contained" size="small">
          Logout
        </Button>
      </div>
      <div className="div">
        <Button
          onClick={() => navegarAdicionarMembro()}
          variant="contained"
          size="small"
        >
          Adicionar membro
        </Button>
      </div>
      <div>
        <Button
          onClick={() => navegarListaMembros()}
          variant="contained"
          size="small"
        >
          Lista membros
        </Button>
      </div>
    </>
  );
};

export default QuadroKanban;
