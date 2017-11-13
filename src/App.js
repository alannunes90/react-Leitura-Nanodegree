import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListaPostagens from "./postagem/ListaPostagens";
// import CreateContact from './CreateContact';
import CriarPostagem from "./postagem/CriarPostagem";
//import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    postagens: []
  };

  componentDidMount() {
    // título, autor, número de comentários, pontuação atual
    const _posts = [
      { id: 1, timestamp: '', titulo: "MVC", corpo: 'O que é mvc?', autor: "Alan Nunes Cerqueira", categoria: 'web', numVotos: 3, deletado: false },
      { id: 2, timestamp: '', titulo: "PWA", corpo: 'O que é pwa?', autor: "Alan Nunes Cerqueira", categoria: 'web', numVotos: 10, deletado: false, },
      { id: 3, timestamp: '', titulo: ".NET", corpo: 'O que é .NET?', autor: "Alan Nunes Cerqueira", categoria: 'web', numVotos: 1, deletado: true, }
    ];

    this.setState({ postagens: _posts });
  }

  excluirPostagem = postagem => {
    this.setState(state => ({
      postagens: state.postagens.filter(c => c.id !== postagem.id)
    })); // remove o contato do state (local)

    //ContactsAPI.remove(contact) // Chama a API para remover o contato do Server
  };

  incluirPostagem(postagem) {
    this.setState(state => ({
      postagens: state.postagens.concat([postagem])
    }));
    // ContactsAPI.create(contact).then(contact => {
    //   this.setState(state => ({
    //     contacts: state.contacts.concat([ contact ])
    //   }))
    // })
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ListaPostagens
                onDeletePostagem={this.excluirPostagem}
                postagens={this.state.postagens.filter(_ => _.deletado === false)}
              />
            </div>
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CriarPostagem
              onCreateContact={postagem => {
                this.incluirPostagem(postagem);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
