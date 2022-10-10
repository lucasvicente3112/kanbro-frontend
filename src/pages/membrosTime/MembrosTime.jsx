import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import DataTableTime from "./Table";
import "./MembrosTime.css";

const MembrosTime = () => {
  let { idTime } = useParams();
  const navigate = useNavigate();
  const navegarQuadro = () => {
    navigate(`/quadro/${idTime}`);
  };
  return (
    <>
      <h1>Lista membros {idTime}</h1>
      <DataTableTime />
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
