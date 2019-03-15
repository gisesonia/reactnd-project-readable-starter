import React, { Component } from "react";
import { connect } from "react-redux";
import { delpost } from "../actions/posts";
import Post from "./Post";
import { MdAssignment } from "react-icons/md";

//Ajuda do slack Alexandre Rocha para criar a função de sort()
function orderPosts(posts, option) {
  switch (option) {
    case "score":
      return posts.sort((a, b) => (a.voteScore - b.voteScore ? -1 : 1));
    case "date":
      return posts.sort((a, b) => (a.timestamp - b.timestamp ? -1 : 1));
    default:
      return posts.map(p => p);
  }
}

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      order: "asc",
      option: "date",
      category: ""
    };
  }

  handleOptionChange = option => {
    this.setState({ option });
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
    this.props.history.push("/category");
  };

  onDelete = id => {
    this.props.deletePost(id).catch(erro => console.log(erro))
  };

  render() {
    const { option } = this.state;
    const { posts } = this.props;
    const { categories } = this.props;
    const orderedPosts = orderPosts(posts, option);
    return (
      <div>
        <div className="pageTitle">
          <h1>Posts</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="buttons">       
          <button
            className=" btn order-date"
            onClick={() => this.handleOptionChange("date")}
          >
            Order by date
          </button>
          <button
            className=" btn order-score"
            onClick={() => this.handleOptionChange("score")}
          >
            Order by Score
          </button>
          <select value={this.state.category} onChange={this.onCategoryChange}>
            <option value="Selecione uma categoria">
              Selecione uma categoria
            </option>
            {categories.map(category =>
              Object.keys(category).map((key, index) => {
                return (
                  <option
                    key={category[index].path}
                    value={category[index].name}
                  >
                    {category[key].name}
                  </option>
                );
                //console.log(category[key].name);
              })
            )}
          </select>
        </div>
        <ul className="postlist">
          {orderedPosts.map((post,index) => (
            <li key={index}>
              <Post post={post} />   
              <div className="buttons">
              <button className="btn leia">Leia Mais</button> 
              <button className="btn editar">Editar</button>
                <button
                  className="btn deletar"
                  onClick={() => {
                    this.onDelete(post.id);
                    this.props.history.push("/");
                  }}
                >
                  Deletar
                </button>
            </div>             
            </li>          
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }, props) {
  return {
    posts: Object.values(posts),
    categories: Object.values(categories)
  };
}
const mapDispatchToProps = dispatch => {
  return {
    //upVote: (id) => dispatch(upVotePostAction(id)),
    //downVote: (id) => dispatch(downVotePostAction(id)),
    deletePost: id => dispatch(delpost(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);