import React from "react";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import { commentEdit } from "../actions/comments";

const EditComment = props => {
  //console.log(props);
  return (
    <div>
      <h1 className="pageTitle">Editar Comentários</h1>
      <CommentForm
        comment={props.commentFiltered}
        onSubmit={updatecomment => {
          //console.log(updatecomment);
          props.dispatch(commentEdit(props.commentFiltered.id, updatecomment));
          props.history.push("/");
        }}
      />
    </div>
  );
};

/* const mapStateToProps = (state, props) => {
console.log(">>>>" + state)
  //console.log(state.comments.find(comment => comment.id === props.match.params.commentId));
  return {
    commentFiltered: state.comments.find(
      comment => comment.id === props.match.params.commentId
    )
  };
}; */

export default connect()(EditComment);
