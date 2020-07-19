import React from "react";
import If, { Else } from "./If"; //Componente { Else }

export default (props) => {
  const usuario = props.usuario || {}; //caso não tenha definido ele preenche com o props (padrão)
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}!</strong>
        <Else>Seja bem vindo amigao</Else>{" "}
      </If>
    </div>
  );
};
