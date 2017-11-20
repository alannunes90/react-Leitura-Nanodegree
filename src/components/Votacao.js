import React, { Component } from "react";
import PropTypes from "prop-types";

class Votacao extends Component {
  static propTypes = {
    numVotos: PropTypes.number.isRequired
  };

  render() {
    const { numVotos} = this.props;

    return (
      <div className="postagem-vote">
        <span
          className="vote-up-off"
          title="Esta pergunta mostra esforço de pesquisa; é útil e clara"
        />
        <br />
        <span className="vote-count-post">{numVotos}</span>
        <br />
        <span
          className="vote-down-off"
          title="Esta pergunta não mostra nenhum esforço de pesquisa; ela não é clara ou não é útil"
        />
      </div>
    );
  }
}

export default Votacao;
