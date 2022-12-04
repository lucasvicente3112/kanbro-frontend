import React, { useEffect, useRef } from "react";
import "./Mensagem.css";
import { MensagemItem } from "./MensagemItem";

export const MensagemLista = ({ listaMensagem, usuario }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [listaMensagem]);

  return (
    <div className="message_list">
      {listaMensagem.map((x, idx) => (
        <MensagemItem key={idx} mensagem={x} usuario={usuario} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
