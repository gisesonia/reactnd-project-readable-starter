import React from "react";
import { connect } from "react-redux";
import { handleCategories } from "../actions/category";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

const PostCategory = props => {
  console.log(props.postinfo)
  return (
    <React.Fragment>
      <div className="pageTitle">
        <h1>Post</h1>
        <MdAssignment className="icon-post" />
      </div>
      <div className="postlist">
      {props.post.map((post, index) => {
        return(
          <li key={index}>
           <Post post={post} />
          </li>
        )       
      })
    }
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({  posts }, ownProps) => {
  const filteredposts = Object.values(posts)
  const postinfo = filteredposts.filter(el => {
    return el.category === ownProps.match.params.category;
  });
  return {
    post: postinfo
  };
};

export default connect(
  mapStateToProps,
  { handleCategories }
)(PostCategory);
