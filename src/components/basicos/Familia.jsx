import React, { cloneElement } from "react";
//{...props} operador Spread, pega todas as propriedades de uma vez

export default (props) => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
