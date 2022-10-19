import React from "react";
import BoxLateral from "../../assets/BoxLateral";
import { Button } from "primereact/button";
import "./EsperaConvite.css";
import { recuperaUsuarioComTime } from "../../services/Api";
import { useNavigate } from "react-router-dom";

const EsperaConvite = () => {
  const navigate = useNavigate();
  const validaConvite = async () => {
    const email = localStorage.getItem("email");
    const responseUsuario = await recuperaUsuarioComTime(email);

    if (responseUsuario.data.idTime) {
      navigate(`/quadro/${responseUsuario.data.idTime}`);
    }
    if (!responseUsuario.data.idTime) {
      navigate("/espera");
    }
  };

  return (
    <>
      <BoxLateral />
      <div id="esperaConvite">
        <h1 className="title">Esperando convite</h1>
        <Button
          type="button"
          label="Validar convite"
          onClick={() => validaConvite()}
        />
      </div>
    </>
  );
};

export default EsperaConvite;
