import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { editPost } from "../actions/posts";

const EditPost = props => {
  //console.log(props);
  return (
    <div>
      <h1 className="pageTitle">Editar Posts</h1>
      <PostForm
        onSubmit={updatepost => {
          props.dispatch(editPost(updatepost));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(">>" + state);
  return {
    posts: state.posts.find(post => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditPost);
