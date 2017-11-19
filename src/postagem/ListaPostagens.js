import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import Votacao from "./Votacao";

class ListaPostagens extends Component {
  static propTypes = {
    postagens: PropTypes.array.isRequired,
    onDeletePostagem: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { postagens, onDeletePostagem } = this.props;
    const { query } = this.state;

    let showingPostagens;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingPostagens = postagens.filter(postagem =>
        match.test(postagem.titulo)
      );
    } else {
      showingPostagens = postagens;
    }

    showingPostagens.sort(sortBy("titulo"));

    return (
      <div className="list-postagens">
        <div className="list-postagens-top">
          <input
            className="search-postagens"
            type="text"
            placeholder="Buscar postagens"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
          <Link to="/create" className="add-postagem">
            Adicionar Postagens
          </Link>
        </div>

        {showingPostagens.length !== postagens.length && (
          <div className="showing-postagens">
            <span>
              Mostrando {showingPostagens.length} de {postagens.length} ao
              total.{" "}
            </span>
            <button onClick={this.clearQuery}>Exibir todos</button>
          </div>
        )}

        <ol className="postagem-list">
          {showingPostagens.map(postagem => (
            <li key={postagem.id} className="postagem-list-item">
              <Votacao numVotos={postagem.numVotos} />
              <div className="postagem-details">
                <p>{postagem.titulo}</p>
                <p>{postagem.corpo}</p>
              </div>
              <div className="postagem-left">
                <span
                onClick={() => onDeletePostagem(postagem)}
                  className="postagem-left-editar"
                  title="Editar postagem!"
                />
                <br />
                <span
                onClick={() => onDeletePostagem(postagem)}
                  className="postagem-left-excluir"
                  title="Excluir a postagem!"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListaPostagens;
