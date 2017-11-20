import React, { Component } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";

class CreatePost extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    
    if (this.props.onCreateContact) 
        this.props.onCreateContact(values);
  };

  render() {
    return (
      <div>
        <Link className="close-create-postagem" to="/">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-postagem-form">
          <div className="create-postagem-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <button>Adicionar postagem</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
