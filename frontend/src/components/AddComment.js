import React from "react";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import { createComment } from "../actions/comments";

const AddComment = props => {
  //console.log(props);
  return (
    <div>
      <h1 className="pageTitle">Adiciona Comentários</h1>
      <CommentForm
        onSubmit={newcomment => {
          props.dispatch(createComment(newcomment));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddComment);
