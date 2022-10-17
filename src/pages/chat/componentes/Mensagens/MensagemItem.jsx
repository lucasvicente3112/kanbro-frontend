import React from "react";
import { timeStampConverter } from "../../utils/timeUtils";
import "./Mensagem.css";

export const MensagemItem = ({ mensagem, usuario }) => {
  console.log("message", mensagem);
  const type = mensagem.tipoMensagem.toLowerCase();
  const self = mensagem.usuario == usuario ? "_self" : "";
  const time = timeStampConverter(mensagem.dateTimeCriacao);

  return (
    <div className={"message_item_" + type + self}>
      {type != "server" && self == "" && (
        <span className="message_item_username">{mensagem.usuario}</span>
      )}
      <div className={"message_content_" + type + self}>
        <span className="message_content_value">{mensagem.conteudo}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
