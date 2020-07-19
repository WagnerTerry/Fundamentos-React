import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0, // caso não tenha o valor, inicia com 0
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - 1,
    });
  };

  passo = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  // setPasso = (e) => { //forma padrão de fazer esse onChange
  //   this.setState({
  //     passo: +e.target.value, //+e converte para um valor inteiro
  //   });
  // };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes
          incrementar={this.inc}
          decrementar={this.dec}
          passo={this.passo}
        />
      </div>
    );
  }
}

export default Contador;
