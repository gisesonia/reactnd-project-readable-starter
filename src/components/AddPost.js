import React from "react"; 
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { createPost } from "../actions/posts";


const AddPost = props => {
 
  return (
  
    <div>
      <h1 className="pageTitle">Adiciona Posts</h1>
      <PostForm
        onSubmit={newpost => {
          props.dispatch(createPost(newpost));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddPost);
