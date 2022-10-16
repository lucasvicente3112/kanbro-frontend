import React, { Fragment, useState, useEffect } from "react";
import Item from "./componentes/Item";
import DropWrapper from "./componentes/DropWrapper";
import Coluna from "./componentes/Coluna";
import Header from "./componentes/Header";
import NovaTarefa from "./componentes/NovaTarefa";
import { data, statuses } from "./data";
import { Button } from "primereact/button";
import { atualizaStatus, recuperaTarefasPorQuadro } from "../../services/Api";
import { useParams, useNavigate } from "react-router-dom";

const QuadroKanban = () => {
  let { idTime } = useParams();
  const navigate = useNavigate();

  const navegarAdicionarMembro = () => {
    navigate(`/quadro/adicionar-membros/${idTime}`);
  };
  const navegarListaMembros = () => {
    navigate(`/time/membros/${idTime}`);
  };
  const [items, setItems] = useState(data);
  const [retornados, setRetornados] = useState("");

  const recuperarTarefas = async () => {
    const response = await recuperaTarefasPorQuadro(idTime);
    setRetornados(response.data);
  };

  useEffect(() => {
    recuperarTarefas();
  }, []);

  // const newData = [...items, ...retornados];
  const newData = [...retornados];

  const onDrop = async (item, monitor, status) => {
    const mapping = statuses.find((statusItem) => statusItem.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
    console.log("onDropStatus", item);

    console.log("onDropStatus", status);

    const novoStatus = await atualizaStatus(item.id, idTime, status);
    window.location.reload();
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    console.log("item", item);
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => {
    setShow(false);

    window.location.reload();
  };

  return (
    <Fragment>
      <Header />
      <Button type="button" label="+ Criar" onClick={onOpen} />
      <NovaTarefa onClose={onClose} show={show} />
      <div className={"row"}>
        {statuses.map((s) => {
          return (
            <div key={s.status} className={"col-wrapper"}>
              <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
              <DropWrapper onDrop={onDrop} status={s.status}>
                <Coluna>
                  {newData
                    .filter((i) => i.status === s.status)
                    .map((i, idx) => (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s}
                      />
                    ))}
                </Coluna>
              </DropWrapper>
            </div>
          );
        })}
      </div>
      <div>
        <Button
          style={{ marginRight: "0.5rem" }}
          type="button"
          label="Adicionar membro"
          onClick={() => navegarAdicionarMembro()}
        />
        <Button
          type="button"
          label="Lista membros"
          onClick={() => navegarListaMembros()}
        />
      </div>
    </Fragment>
  );
};

export default QuadroKanban;
