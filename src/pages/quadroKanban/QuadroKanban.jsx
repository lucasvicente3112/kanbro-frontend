import React, { Fragment, useState, useEffect } from "react";
import Item from "./componentes/Item";
import DropWrapper from "./componentes/DropWrapper";
import Coluna from "./componentes/Coluna";
import Header from "./componentes/Header";
import NovaTarefa from "./componentes/NovaTarefa";
import { estados } from "./data";
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
  const [retornados, setRetornados] = useState("");

  const recuperarTarefas = async () => {
    const response = await recuperaTarefasPorQuadro(idTime);
    setRetornados(response.data);
  };

  useEffect(() => {
    recuperarTarefas();
  }, []);

  const cards = [...retornados];

  const onDrop = async (item, monitor, status) => {
    await atualizaStatus(item.id, idTime, status);
    window.location.reload();
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
      <div className={"pos-criar-quadro"}>
        <Button type="button" label="+ Criar" onClick={onOpen} />
      </div>
      <NovaTarefa onClose={onClose} show={show} />
      <div className={"row"}>
        {estados.map((s) => {
          return (
            <div key={s.status} className={"coluna-quadro"}>
              <h2 className={"header-coluna"}>{s.status.toUpperCase()}</h2>
              <DropWrapper onDrop={onDrop} status={s.status}>
                <Coluna>
                  {cards
                    .filter((i) => i.status === s.status)
                    .map((i, idx) => (
                      <Item key={i.id} item={i} index={idx} status={s} />
                    ))}
                </Coluna>
              </DropWrapper>
            </div>
          );
        })}
      </div>
      <div className="botoes-membros">
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
