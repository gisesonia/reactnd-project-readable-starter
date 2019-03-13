import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/posts";
import { handleComments } from "../actions/comments";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

class PostDetails extends Component {

  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    const { postId } = this.props.match.params
    this.props.getPost(postId);
    this.props.getComments(postId);
  }

  render() {
    const {post} = this.props
    return (
     <React.Fragment>
        <div className="pageTitle">
          <h1>Post</h1>
          <MdAssignment className="icon-post" />
        </div>        
        <div className="postlist">
           <Post post={post} /> 
          <button className="btn editar">Editar</button>
          <button className="btn deletar">Deletar</button>
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps({posts}) {  
  return {    
    post: posts
  }; 
}

const mapDispatchToProps = dispatch => ({
  getComments(id) {
    dispatch(handleComments(id));
  },
  getPost(id) {
    dispatch(fetchPost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
