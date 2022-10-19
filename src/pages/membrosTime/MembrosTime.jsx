import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import DataTableTime from "./Table";
import Header from "../quadroKanban/componentes/Header";
import "./MembrosTime.css";

const MembrosTime = () => {
  let { idTime } = useParams();
  const navigate = useNavigate();
  const navegarQuadro = () => {
    navigate(`/quadro/${idTime}`);
  };
  return (
    <>
      <Header />
      <h2 className="titulo">Lista de membros</h2>
      <div className="tamanhoTabela">
        <DataTableTime />
      </div>
      <div className="divSpacing">
        <Button
          onClick={() => navegarQuadro()}
          variant="contained"
          size="small"
        >
          Voltar
        </Button>
      </div>
    </>
  );
};

export default MembrosTime;
