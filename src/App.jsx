import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega" color="gold">
        <Mega />
      </Card>

      <Card titulo="#12 - Componente Contador" color="brown">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Componente Controlado(Input)" color="blue">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="cyan">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="gray">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="purple">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="green">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="orange">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="lightskyblue">
        <Familia sobrenome="Gonçalves">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#080">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro">
        <ComParametro titulo="Situação do aluno" aluno="Ash" nota={9.5} />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  </div>
);
