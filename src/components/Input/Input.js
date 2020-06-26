import React, { Component } from 'react'
export default class Input extends Component {

inputPesquisar = (evento) =>{
  const {pesquisa} = this.props;
  pesquisa(evento.target.value);
}
  render() {
    return (
      <div className="col s4">
        <input onChange ={this.inputPesquisar} type="text" />
      </div>
    )
  }
}
