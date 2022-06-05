import React from "react";
import classes from "./header.module.css";
class Header extends React.Component {
  state = {};
  render() {
    return (
      <div className={classes.header}>
        <h1>Phần mềm quản lí công việc</h1>
      </div>
    );
  }
}

export default Header;
