import React, { Component } from "react";
import Titulo from "./components/Titulo/Titulo";
import Input from "./components/Input/Input";
import ContadorDePaises from "./components/ContadorDePaises/ContadorDePaises";
import PopulacaoTotal from "./components/PopulacaoTotal/PopulacaoTotal";
import LstPaises from "./components/LstPaises/LstPaises";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      paises: [],
      paisesFormatados: [],
      qtdPaises: 0,
      populacao: 0,
    };
  }

  async componentDidMount() {
    const lstPaises = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await lstPaises.json();
    this.mapPaises(json);
  }

  mapPaises = (json) => {
    const paises = json.map((pais) => {
      const { name, flag, population } = pais;

      return {
        name,
        flag,
        population,
      };
    });

    this.setState({
      paises,
    });
  };

  atualizarPaises = (paisesFiltrados) => {
    this.setState({
      paisesFormatados: paisesFiltrados,
      qtdPaises: paisesFiltrados.length,
      populacao: this.somaPopulacao(paisesFiltrados),
    });
  };

  somaPopulacao = (paisesFiltrados) => {
    const soma = paisesFiltrados.reduce((total, atual) => {
      return (total += atual.population);
    }, 0);

    return new Intl.NumberFormat().format(soma);
  };

  pesquisarPais = (caracteres) => {
    console.log(caracteres);
    if (caracteres !== "") {
      const { paises } = this.state;
      const paisesFiltrados = paises.filter((pais) =>
        pais.name.toUpperCase().includes(caracteres.toUpperCase())
      );
      this.atualizarPaises(paisesFiltrados);
    } else {
      this.zerarContadores();
    }
  };

  zerarContadores = () => {
    this.setState({
      paisesFormatados: [],
      qtdPaises: 0,
      populacao: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <Titulo />
        <div className="row">
          <Input pesquisa={this.pesquisarPais} />
          <ContadorDePaises contador={this.state.qtdPaises} />
          <PopulacaoTotal populacao={this.state.populacao} />
        </div>
        <div className="row">
          <LstPaises array={this.state.paisesFormatados} />
        </div>
      </div>
    );
  }
}
