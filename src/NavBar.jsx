import React from "react";
import { NavLink } from "react-router-dom";
import PolymerSharpIcon from "@material-ui/icons/PolymerSharp";

function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink to="/" className="nl navbar-brand nh">
                  <PolymerSharpIcon style={{fontSize:50}} />
                </NavLink>
                {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">uffkkvjhcjhcjvj</span>
          </button> */}
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link nh">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link nh">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/service" className="nav-link nh">
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink to="/contact" className="nav-link nh">
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
}

export default NavBar;
