import React, { Component } from "react";
import { connect } from "react-redux";
import { handleComments } from "../actions/comments";
import { loadpost} from "../actions/posts";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

class PostDetails extends Component {
  componentDidMount() {
    //console.log(this.props.params.postId)
    this.props.loadPost(this.props.match.params.postId);
    //this.props.loadComments(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;
    return (
      <React.Fragment>
        <div className="pageTitle">
          <h1>Post</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="postlist">
          {post && <Post post={post}  />}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log(state.post);
  return {
    post: state.post
  };
};

const mapDispatchToProps = dispatch => ({
  loadPost(id) {
    dispatch(loadpost(id));
  },
  loadComments(postid) {
    dispatch(loadpost(handleComments(postid)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
