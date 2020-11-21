import React from "react";
import { Link } from "./../util/router.js";
import "./DashboardNav.scss";

function DashboardNav(props) {
  return (
    <div
      className={
        "DashboardNav tabs is-toggle is-centered" +
        (props.parentColor === "white" ? " active-tab-text-white" : "")
      }
    >
      <ul>
        <li
          className={"" + (props.activeKey === "general" ? " is-active" : "")}
        >
          <Link to="/dashboard/home">Home</Link>
        </li>
        <li
          className={"" + (props.activeKey === "password" ? " is-active" : "")}
        >
          <Link to="/dashboard/send-a-text">Send a Text</Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardNav;
