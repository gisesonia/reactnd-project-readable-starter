import { combineReducers } from "redux";
import comments from "./comments";
import posts from "./posts";
import loading from "./loading";

export default combineReducers({
  loading,
  posts,
  comments
});
