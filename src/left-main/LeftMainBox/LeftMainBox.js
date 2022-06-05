import React from "react";
import LeftMainComponent from "../LeftMainComponent/LeftMainComponent";
import classes from "./LeftMainBox.module.css";

class LeftMainBox extends React.Component {
  list = [
    {
      title: "ZIo",
      content: "check something",
      img: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "DECADE",
      content: "DON'TTTTT",
      img: "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBzZXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "BUILDD",
      content: "PLEASESSSSS",
      img: "https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBzZXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "BUILDD",
      content: "PLEASESSSSS",
      img: "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "BUILDD",
      content: "PLEASESSSSS",
      img: "https://images.unsplash.com/photo-1654254124915-0aa7a6812753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];

  render() {
    return (
      <div className={classes.box}>
        {this.list.map((box, index) => {
          return (
            <LeftMainComponent
              key={index}
              img={box.img}
              content={box.content}
              title={box.title}
            />
          );
        })}
      </div>
    );
  }
}

export default LeftMainBox;
