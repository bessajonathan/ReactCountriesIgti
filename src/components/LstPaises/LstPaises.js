import React, { Component } from "react";
import "./css.modules.css";
export default class LstPaises extends Component {
  render() {
    const { array } = this.props;
    return (
      <>
        <h4 className="center">Países</h4>
        <hr />
        <div className="lstPaises">
          {array.map((pais) => {
            return (
              <ul className="pais" key={pais.name}>
                <img src={pais.flag} alt={pais.name}></img>
                <p>{pais.name}</p>
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}
