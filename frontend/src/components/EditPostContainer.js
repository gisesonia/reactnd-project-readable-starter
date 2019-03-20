import React, { Component } from "react";
import { connect } from "react-redux";
import { handleComments } from "../actions/comments";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

class EditPostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const { post } = this.props;
    //console.log(post[0])
    return <div>Teste</div>;
  }
}


export default connect()(EditPostContainer);
