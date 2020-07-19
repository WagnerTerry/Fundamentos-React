import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial"); // estados [valor, setValor] componente baseado em funções

  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={valor} onChange={quandoMudar} />
        {/*Componente controlado ex. onChange */}
        <input value={valor} readOnly />
        <input value={undefined} /> {/*Componente não controlado */}
      </div>
    </div>
  );
};
