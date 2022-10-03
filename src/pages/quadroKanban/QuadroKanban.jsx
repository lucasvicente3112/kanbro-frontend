import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../../Context/autenticacao";

const QuadroKanban = () => {
  let { idTime } = useParams();
  const { logout } = useContext(AuthenticationContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h2>Quadro do time {idTime}</h2>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default QuadroKanban;
