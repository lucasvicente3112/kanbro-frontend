import React from "react";
import { Mensagem } from "./componentes/Mensagens/Mensagem";

const ChatWrapped = ({ id, usuario }) => {
  return (
    <div>
      <Mensagem sala={id} usuario={usuario} />
    </div>
  );
};

export default ChatWrapped;
