import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { handleCategories } from "../actions/category";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Page404 from "../components/Page404";
import PostDetails from "../components/PostDetails";
import AddPost from "../components/AddPost";
import PostCategory from "../components/PostCategory";
import EditPost from "../components/EditPost";
import AddComment from "../components/AddComment";
import EditComment from "../components/EditComment";

//referência de loading exemplo de todos do curso e api do exemplo do twitter

class App extends Component {
  componentDidMount() {
    this.props.getInitialData();
    this.props.getCategories();
  }

  render() {
    return (
      <>
        {this.props.loading === true ? null : (
          <BrowserRouter>
            <div className="App">
              <Menu />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/addpost" component={AddPost} />
                <Route path="/:category/edit/:postId" component={EditPost} />
                <Route exact path="/:category" component={PostCategory} />
                <Route path="/:category/:postId" component={PostDetails} />
                <Route path="/addcomment" component={AddComment} />
                <Route path="/edit/:commentId" component={EditComment} />
                <Route component={Page404} />
              </Switch>
            </div>
          </BrowserRouter>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ loading, categories }) => {
  //console.log(categories);
  return { loading, categories };
};

const mapDispatchToProps = dispatch => ({
  getCategories() {
    dispatch(handleCategories());
  },
  getInitialData() {
    dispatch(handleInitialData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
