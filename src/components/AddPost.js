import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { addPost } from "../actions/posts";

const AddPost = props => {
  return (
    <div>
      <h1 className="pageTitle">Adiciona Posts</h1>
      <PostForm
        onSubmit={newpost => {
          props.dispatch(addPost(newpost));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddPost);
