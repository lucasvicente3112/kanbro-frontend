import React, { useState } from "react";
import Modal from "react-modal";
import ChatModal from "./ChatModal";

Modal.setAppElement("#root");

const WrapperChat = ({ show, onClose, item, usuario }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"contorno-botao-fechar"}>
        <button className={"botao-fechar"} onClick={onClose}>
          X
        </button>
      </div>

      <ChatModal id={item.id} usuario={usuario} />
    </Modal>
  );
};

export default WrapperChat;
