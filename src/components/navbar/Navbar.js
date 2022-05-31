import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="outerNavbar">
      <div className="innerNavbar">
        <h4 className="brand">SeatLock</h4>
        <div className="container">
          <p
            className={props.active === "movie" ? "active menu" : "menu"}
            onClick={() => {
              props.changeScreen("movie");
            }}
          >
            Movies
          </p>
          <p
            className={props.active === "theater" ? "active menu" : "menu"}
            onClick={() => {
              props.changeScreen("theater");
            }}
          >
            Theater
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
