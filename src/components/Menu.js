import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className="navigation">
            <li>READABLE</li>
            <li>
            <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/addpost">Criar posts</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
