import { combineReducers } from "redux";
import comments from "./comments";
import posts from "./posts";
import { post } from "./posts";
import loading from "./loading";
import categories from "./categories";

export default combineReducers({
  loading,
  posts,
  post,
  comments,
  categories
});
