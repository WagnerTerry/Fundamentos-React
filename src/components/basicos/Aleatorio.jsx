import React from "react";

export default (props) => {
  //   const max = props.max;
  //   const min = props.min;

  //destructor { min , max }
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <p> valor minimo:{min}</p>
      <p>valor maximo:{max}</p>
      <p>valor aleatorio: {aleatorio}</p>
    </div>
  );
};
