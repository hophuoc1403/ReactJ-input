import React from "react";
import classes from "./LeftMainComponent.module.css";
import clsx from "clsx";

// var bool = false;
class LeftMainComponent extends React.Component {
  render() {
    return (
      <div
        className={clsx(classes.box)}
        // onClick={this.updateState.bind(this)}
        onClick={(e) => {
          this.chooseItem(e);
        }}
      >
        <div className={classes.logo}>
          <img src={this.props.img} alt="" />
        </div>
        <div className="content">
          <p className={classes.title}>{this.props.title}</p>
          <p className={classes.content}>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default LeftMainComponent;
