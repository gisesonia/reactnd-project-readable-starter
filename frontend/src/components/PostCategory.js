import React from "react";
import { connect } from "react-redux";
import { handleCategories } from "../actions/category";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

const PostCategory = props => {
  return (
    <React.Fragment>
      <div className="pageTitle">
        <h1>Post</h1>
        <MdAssignment className="icon-post" />
      </div>
      <div className="postlist">
        <Post post={props.post} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ categories, posts }, ownProps) => {
  const filteredposts = Object.values(posts).map(post => {
    return post;
  });
  const postinfo = filteredposts.filter(el => {
    console.log(el.category + "hfhfh");
    return el.category === ownProps.match.params.path;
  });
  console.log(ownProps);
  console.log(postinfo);
  return {
    post: postinfo,
    categories: Object.values(categories)
  };
};

export default connect(
  mapStateToProps,
  { handleCategories }
)(PostCategory);

