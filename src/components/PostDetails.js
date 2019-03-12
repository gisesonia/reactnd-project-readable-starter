import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { MdAssignment } from "react-icons/md";

const PostDetails = (props) => {
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
        {this.props.posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <button className="btn editar">Editar</button>
      <button className="btn deletar">Deletar</button>
    </div>
  );
};

function mapStateToProps({ posts }, {id}) {
  return {
    posts: Object.values(posts)
  };
}

export default connect(mapStateToProps)(PostDetails);
