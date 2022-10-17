import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import DetalhesTarefa from "./DetalhesTarefa";
import WrapperChat from "../../chat/WrapperChat";

import ITEM_TYPE from "../data/types";

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
        <div onClick={onOpen}>Detalhes</div>
        <div onClick={onOpenChat}>Chat</div>
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
