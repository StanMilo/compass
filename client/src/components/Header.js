import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo right">
          Compass
        </Link>
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/persons">Persons</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
