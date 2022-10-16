import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import DetalhesTarefa from "./DetalhesTarefa";
import ITEM_TYPE from "../data/types";

const Item = ({ item, index, status }) => {
  const ref = useRef(null);

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

  drag(drop(ref));

  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"item"}
        onClick={onOpen}
      >
        <div
          className={"color-bar"}
          style={{ backgroundColor: status.color }}
        />
        <p className={"titulo-item"}>Título: {item.titulo}</p>
        <p className={"titulo-item"}>Descrição: {item.descricao}</p>
        <p className={"titulo-item"}>Responsável: {item.responsavel}</p>
      </div>
      <DetalhesTarefa item={item} onClose={onClose} show={show} />
    </Fragment>
  );
};

export default Item;
