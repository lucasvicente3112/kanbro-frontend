import { useCallback, useEffect, useState } from "react";
import * as io from "socket.io-client";
import { SOCKET_BASE_URL } from "../constantes/apiConstantes";

export const useSocket = (sala, usuario) => {
  const [socket, setSocket] = useState();
  const [socketResponse, setSocketResponse] = useState({
    sala: "",
    conteudo: "",
    usuario: "",
    tipoMensagem: "",
    dateTimeCriacao: "",
  });
  const [isConnected, setConnected] = useState(false);
  const sendData = useCallback(
    (payload) => {
      socket.emit("send_message", {
        sala: sala,
        conteudo: payload.conteudo,
        usuario: usuario,
        tipoMensagem: "CLIENT",
      });
    },
    [socket, sala]
  );
  useEffect(() => {
    const s = io(SOCKET_BASE_URL, {
      reconnection: false,
      query: `usuario=${usuario}&sala=${sala}`, //"room=" + room+",username="+username,
    });
    console.log("s em socket", s);
    setSocket(s);
    s.on("connect", () => setConnected(true));
    s.on("read_message", (res) => {
      console.log(res);
      setSocketResponse({
        sala: res.sala,
        conteudo: res.conteudo,
        usuario: res.usuario,
        tipoMensagem: res.tipoMensagem,
        dateTimeCriacao: res.dateTimeCriacao,
      });
    });
    return () => {
      s.disconnect();
    };
  }, [sala]);

  return { socketResponse, isConnected, sendData };
};
