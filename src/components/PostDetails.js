import React, { Component } from "react";
import { connect } from "react-redux";
import { handleComments } from "../actions/comments";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

class PostDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    //console.log(post[0])
    return (
      <React.Fragment>
        <div className="pageTitle">
          <h1>Post</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="postlist">
          <Post post={post} />
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps({ posts }, props) {
  const filteredposts = Object.values(posts).map(post => {
    return post;
  });
  const postinfo = filteredposts.filter(el => {
    //console.log(el.id + 'hfhfh')
    return el.id === props.match.params.postId;
  });
  //console.log(postinfo)
  return {
    post: postinfo[0]
  };
}

export default connect(mapStateToProps)(PostDetails);
