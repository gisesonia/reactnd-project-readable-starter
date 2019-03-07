import React, { Component } from "react";
import { connect } from "react-redux";



class PostForm extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      body: "",
      author: "",
      category: "",
      error: ""
    };
  }

  onCategoryChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onAuthorChange = e => {
    const author = e.target.value;
    this.setState(() => ({ author }));
  };

  onDescriptionChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.body || !this.state.title) {
      this.setState(() => ({
        error: "Por favor preencher uma descrição e um titulo."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category
      });
    }
  };
  render() {
   
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="formulario" onSubmit={this.onSubmit}>
          <div>
            <label>Categoria:</label>
            <select
              value={this.state.category}
              onChange={this.onCategoryChange}
            >
              <option value="1">Option one</option>
              
            </select>
          </div>
          <label>Titulo:</label>
          <input
            name="textinput"
            type="text"
            placeholder="titulo"
            value={this.state.body}
            onChange={this.onTitleChange}
          />
          <label>Autor:</label>
          <input
            id="textinput"
            name="textinput"
            type="text"
            placeholder="autor"
            value={this.state.body}
            onChange={this.onAuthorChange}
          />
          <div className="descricao">
            <label>Descrição</label>
            <textarea
              name="Descricao"
              className="textarea"
              id="Descricao"
              value={this.state.body}
              onChange={this.onDescriptionChange}
            />
          </div>
          <button className="btn editar">Adiciona post</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
