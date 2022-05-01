import React, { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
