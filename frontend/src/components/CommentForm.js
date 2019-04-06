import React, { Component } from "react";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: props.comment ? props.comment.body : "",
      author: props.comment ? props.comment.author : "",
      error: ""
    };
  }

  onAuthorChange = e => {
    const author = e.target.value;
    this.setState(() => ({ author }));
  };

  onDescriptionChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
    //console.log(body);
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.body || !this.state.author) {
      this.setState(() => ({
        error: "Por favor preencher o nome do autor e um comentário."
      }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.onSubmit({
        body: this.state.body,
        author: this.state.author
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="formulario" onSubmit={this.onSubmit}>
          <label>Autor:</label>
          <input
            id="autor_com"
            name="autor_com"
            type="text"
            placeholder="autor"
            disabled={this.props.post ? "disabled" : ""}
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <div className="">
            <label>Descrição</label>
            <textarea
              name="Comentario"
              className="textarea"
              id="Comentario"
              value={this.state.body}
              onChange={this.onDescriptionChange}
            />
          </div>
          <button className="btn adicionar">
            {this.props.comment ? "Editar post" : "Adiciona post"}
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
