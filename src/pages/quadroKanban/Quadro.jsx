import React, { Fragment, useState } from "react";
import Item from "./componentes/Item";
import DropWrapper from "./componentes/DropWrapper";
import Coluna from "./componentes/Coluna";
import Header from "./componentes/Header";
import NovaTarefa from "./componentes/NovaTarefa";
import { data, statuses } from "./data";
import { Button } from "primereact/button";

const Quadro = () => {
  const [items, setItems] = useState(data);
  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((statusItem) => statusItem.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

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
                  {items
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
    </Fragment>
  );
};

export default Quadro;
