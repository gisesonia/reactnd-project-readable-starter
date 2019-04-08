import React, { Component } from "react";
import { connect } from "react-redux";
import { handleComments } from "../actions/comments";
import { loadpost} from "../actions/posts";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";
import Comment from "./Comment"

class PostDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
    //console.log(this.props.params.postId)
    this.props.loadPost(this.props.match.params.postId);
    this.props.loadComments(this.props.match.params.postId);
  }

  render() {
      console.log(this.props)
    const { post,comments } = this.props;
    return (
      <React.Fragment>
        <div className="pageTitle">
          <h1>Post</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="postlist">
          {post && <Post post={post}  />}
        </div>
        <div className="postlist">
        <ul className="postlist">
        {console.log(comments)}
          {comments.map((comment, index) => {           
            return (
              <li key={index}>
                <Comment comment={comment}/>
                <div className="buttons">
                  <button
                    className="btn leia"
                    onClick={() => {                    
                      console.log(this.props.history.push(`/addcomments`));
                    }}
                  >
                    Adiciona
                  </button>
                  <button
                    className="btn editar"
                    onClick={() => {
                      this.props.history.push(`/${post.category}/editComment/${comment.id}`);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn deletar"
                    onClick={() => {
                      this.onDelete(comment.id);
                      this.props.history.push("/");
                    }}
                  >
                    Deletar
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    post: state.post,
    comments: Object.values(state.comments)
  };
};

const mapDispatchToProps = dispatch => ({
  loadPost(id) {
    dispatch(loadpost(id));
  },
  loadComments(postid) {
    dispatch(handleComments(postid));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
