import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
