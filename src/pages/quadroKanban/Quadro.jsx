import React, { useState } from "react";
import Card from "./componentes/Card";
import DropWrapper from "./componentes/DropWrapper";
import Coluna from "./componentes/Coluna";
import { data, statuses } from "./data";

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

  return (
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
                    <Card
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
  );
};

export default Quadro;
