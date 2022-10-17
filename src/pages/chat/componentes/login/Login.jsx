import React from "react";

import "./Login.css";

export const Login = ({ sala, setSala, usuario, setUsuario, setLoggedIn }) => {
  const checkForLogin = (e) => {
    e.preventDefault();
    if (sala == "" || usuario == "") {
      alert("fill the required fields");
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login_root">
      <form className="login_form" onSubmit={checkForLogin}>
        <input
          type="text"
          required
          placeholder="room name"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="username"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
