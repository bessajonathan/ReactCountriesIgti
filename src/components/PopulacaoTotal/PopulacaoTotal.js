import React, { Component } from 'react'

export default class PopulacaoTotal extends Component {


  render() {
    const {populacao} = this.props;
    return (
      <div className="col s4">
        <h6>População Total: {populacao}</h6>
      </div>
    )
  }
}
