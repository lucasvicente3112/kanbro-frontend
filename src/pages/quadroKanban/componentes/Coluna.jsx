import React from "react";

const Coluna = ({ isOver, children }) => {
  const className = isOver ? " regiao-destacada" : "";

  return <div className={`col${className}`}>{children}</div>;
};

export default Coluna;
