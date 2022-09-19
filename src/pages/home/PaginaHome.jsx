import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/autenticacao";

const PaginaHome = () => {
  const { logout } = useContext(AuthenticationContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Home</h1>
      <h2>Time criado com sucesso!</h2>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default PaginaHome;
