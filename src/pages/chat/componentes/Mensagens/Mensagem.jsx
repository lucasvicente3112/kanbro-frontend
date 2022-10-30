import React, { useEffect, useState } from "react";
import { useSocket } from "../../componentes/customHooks/useSocket";

import "primeicons/primeicons.css";
import "./Mensagem.css";
import { MensagemLista } from "./MensagemLista";
import { timeStampConverter } from "../../utils/timeUtils";
import { useFetch } from "../customHooks/useFetch";

export const Mensagem = ({ sala, usuario }) => {
  const { isConnected, socketResponse, sendData } = useSocket(sala, usuario);
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const { responseData, error, loading } = useFetch("/mensagem/" + sala);

  const addMessageToList = (val) => {
    if (val.sala == "") return;
    setMessageList([...messageList, val]);
  };

  useEffect(() => {
    if (responseData != undefined) {
      setMessageList([...responseData, ...messageList]);
    }
  }, [responseData]);

  useEffect(() => {
    console.log("Socket Response: ", socketResponse);
    addMessageToList(socketResponse);
  }, [socketResponse]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput != "") {
      sendData({
        conteudo: messageInput,
      });
      const time = ""; //timeStampConverter(Math.floor(Date.now() / 1000));
      addMessageToList({
        conteudo: messageInput,
        usuario: usuario,
        dateTimeCriacao: new Date(),
        tipoMensagem: "CLIENT",
      });
      setMessageInput("");
    }
  };

  return (
    <div className="message_root_div">
      <div className="message_component">
        <MensagemLista usuario={usuario} listaMensagem={messageList} />
        <form className="chat-input" onSubmit={(e) => sendMessage(e)}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Digite uma mensagem"
          />
          <button type="submit">
            {messageInput == "" ? (
              <i className="pi pi-send"></i>
            ) : (
              <i className="pi pi-telegram"></i>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
