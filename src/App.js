import "./App.css";
import Header from "./components/headerClass.js/HeaderClass";
import Input from "./components/input/Input";
import React from "react";
import LeftMainBox from "./left-main/LeftMainBox/LeftMainBox";

function App() {
  return (
    <div className="">
      <Header />
      <div className="box">
        <LeftMainBox />
        <Input />
      </div>
    </div>
  );
}

export default App;
