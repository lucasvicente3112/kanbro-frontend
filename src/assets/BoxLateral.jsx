import React from "react";
import KanbroBig from "../assets/Logos/KanbroBig.png";
import "./BoxLateralStyle.css";

const BoxLateral = () => {
  return (
    <div id="boxLateral">
      <img src={KanbroBig} style={{ width: "70%" }} alt="KanbroBig" />
    </div>
  );
};

export default BoxLateral;
