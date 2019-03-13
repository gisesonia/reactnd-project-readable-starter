import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { handleInitialData } from "../actions/shared";
import { handleComments } from "../actions/comments";
import { MdAssignment } from "react-icons/md";

class PostDetails extends Component {

  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    this.props.getInitialData();
    this.props.getComments();
  }

  render() {
    return (
      <div>
        <div className="pageTitle">
          <h1>Posts</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="buttons">
          <button
            className=" btn order-date"
            onClick={() => this.handleOptionChange("date")}
          >
            Order by date
          </button>
          <button
            className=" btn order-score"
            onClick={() => this.handleOptionChange("score")}
          >
            Order by Score
          </button>
        </div>
        <ul className="postlist">
          <li />
        </ul>
        <button className="btn editar">Editar</button>
        <button className="btn deletar">Deletar</button>
      </div>
    );
  }
}
function mapStateToProps(state, {props}) {
  const { postId } = props.match.params;
  console.log(state);
  return {
    postId
  };
}

const mapDispatchToProps = dispatch => ({
  getComments() {
    dispatch(handleComments());
  },
  getInitialData() {
    dispatch(handleInitialData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
