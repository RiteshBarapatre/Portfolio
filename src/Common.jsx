import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>{props.head}</h1>
          <h2>We build the most recognised Website</h2>
          <NavLink to={props.link}>
            <button className="btn btn-outline-primary trans">
              {props.title}
            </button>
          </NavLink>
        </div>
        <div className="right">
          <img src={props.web} alt="team" />
        </div>
      </div>
    </>
  );
};

export default Common;
