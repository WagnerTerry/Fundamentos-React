import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  //   const li1 = (
  //     <li>
  //       {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
  //     </li>
  //   );

  const alunosLI = alunos.map((aluno) => {
    return (
      <div key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </div>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>{alunosLI} </li>
      </ul>
    </div>
  );
};
