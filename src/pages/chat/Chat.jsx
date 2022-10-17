import React, { useState } from "react";
import { Login } from "./componentes/login/Login";
import { Mensagem } from "./componentes/Mensagens/Mensagem";

const Chat = () => {
  const [usuario, setUsuario] = useState("");
  const [sala, setSala] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login
          usuario={usuario}
          setUsuario={setUsuario}
          sala={sala}
          setSala={setSala}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <Mensagem sala={sala} usuario={usuario} />
      )}
    </div>
  );
};

export default Chat;
