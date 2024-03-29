import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const DetalhesTarefa = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"contorno-botao-fechar"}>
        <h1 style={{ flex: "1 90%" }}>{item.titulo}</h1>
        <button className={"botao-fechar"} onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Descrição</h2>
        <p>{item.descricao}</p>
        <h2>Status</h2>
        <p>{`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
      </div>
    </Modal>
  );
};

export default DetalhesTarefa;
