import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { postEdit } from "../actions/posts";

const EditPost = props => {
  console.log(props);
  return (
    <div>
      <h1 className="pageTitle">Editar Posts</h1>
      <PostForm
        post={props.postFiltered}
        onSubmit={(updatepost) => {
           console.log(updatepost)
          props.dispatch(postEdit(props.postFiltered.id,updatepost));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log( state.posts.find(post => post.id === props.match.params.postId));
  return {
    postFiltered: state.posts.find(post => post.id === props.match.params.postId)
  };
};

export default connect(mapStateToProps)(EditPost);
