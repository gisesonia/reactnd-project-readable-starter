import React, { Component } from "react";
import { connect } from "react-redux";
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
      option: "date"
    };
  }

  handleOptionChange = option => {
    this.setState({ option });
  };

  render() {
    const { option } = this.state;
    const { posts } = this.props;
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
        </div>
        <ul className="postlist">
          {orderedPosts.map(post => (
            <li key={post.id}>
              <Post post={post} />   
              <div className="buttons">
              <button className="btn leia">Leia Mais</button> 
            </div>             
            </li>          
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: Object.values(posts)
  };
}

export default connect(mapStateToProps)(Dashboard);
