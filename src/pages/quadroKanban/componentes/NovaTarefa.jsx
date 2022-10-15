import React, { useState } from "react";
import Modal from "react-modal";
import { TextField } from "@mui/material";
import { Button } from "primereact/button";
import { adicionarTarefa } from "../../../services/Api";

Modal.setAppElement("#root");

const NovaTarefa = ({ show, onClose, item }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [status, setStatus] = useState("ToDo");

  const NovaTarefa = {
    titulo: `${titulo}`,
    descricao: `${descricao}`,
    responsavel: `${responsavel}`,
    status: `${status}`,
    quadro: {
      time: 1,
    },
  };

  const criaTarefa = async () => {
    const response = await adicionarTarefa(NovaTarefa);
    console.log("response", response.data);
    console.log(NovaTarefa);
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>Adicionar Tarefa</h1>
        <button className={"close-btn"} onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Título</h2>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <h2>Descrição</h2>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
        <h2>Responsável</h2>
        <TextField
          variant="outlined"
          size="small"
          value={responsavel}
          onChange={(event) => setResponsavel(event.target.value)}
        />
      </div>
      <Button
        type="button"
        label="Criar"
        style={{
          margin: "20px",
        }}
        onClick={() => criaTarefa()}
      />
    </Modal>
  );
};

export default NovaTarefa;
