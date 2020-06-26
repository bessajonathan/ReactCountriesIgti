import React, { Component } from 'react'

export default class ContadorDePaises extends Component {

  render() {
    const {contador} = this.props;
    return (
      <div className="col s4">
        <h6 >Quantidade de países : {contador}</h6>
      </div>
    )
  }
}
