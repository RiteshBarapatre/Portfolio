import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = ({isActive})=> ({
    color: isActive ? "blue" : "black",
    // fontSize : isActive ? "25px" : "20px",
    // textDecoration: isActive ? "underline" : "none",
    // textDecorationColor: isActive ? "red" : "none"
    borderBottom: isActive ? "2px solid blue" : "none",
    textDecoration:"none"
  })
  return (
    <>
      <div className="container-fluid nav">
        <div className="row">
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light nav_color">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  RKB Developer
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse mar_lef"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/" style={styles}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services" style={styles}>
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about" style={styles}>
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact" style={styles}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
