import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <nav>
      <li>
        <NavLink to="/" activeClassName="is-active">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Add Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </nav>
  );
}

export default Header;
