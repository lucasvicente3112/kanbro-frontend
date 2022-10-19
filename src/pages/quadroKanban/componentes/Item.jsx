import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import DetalhesTarefa from "./DetalhesTarefa";
import WrapperChat from "../../chat/WrapperChat";
import Chat from "@mui/icons-material/Chat";
import Info from "@mui/icons-material/Info";

import ITEM_TYPE from "../data/types";
import { Button } from "@mui/material";

const Item = ({ item, index, status }) => {
  const ref = useRef(null);
  const usuarioLogado = localStorage.getItem("usuario");

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  const [showChat, setShowChat] = useState(false);
  const onOpenChat = () => setShowChat(true);
  const onCloseChat = () => setShowChat(false);

  drag(drop(ref));

  return (
    <Fragment>
      <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className={"item"}>
        <div
          className={"color-bar"}
          style={{ backgroundColor: status.color }}
        />
        <p className={"titulo-item"}>Título: {item.titulo}</p>
        <p className={"titulo-item"}>Descrição: {item.descricao}</p>
        <p className={"titulo-item"}>Responsável: {item.responsavel}</p>
        {/* <div onClick={onOpen}>Detalhes</div> */}
        <Button
          size="small"
          variant="outlined"
          onClick={onOpen}
          style={{ fontSize: "50%" }}
          endIcon={<Info />}
        >
          Detalhes
        </Button>
        {/* <div onClick={onOpenChat}>Chat</div> */}
        <Button
          size="small"
          variant="outlined"
          onClick={onOpenChat}
          style={{ fontSize: "50%" }}
          endIcon={<Chat />}
        >
          Chat
        </Button>
      </div>
      <DetalhesTarefa item={item} onClose={onClose} show={show} />
      <WrapperChat
        item={item}
        usuario={usuarioLogado}
        onClose={onCloseChat}
        show={showChat}
      />
    </Fragment>
  );
};

export default Item;
