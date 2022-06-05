import clsx from "clsx";
import classes from "./Input.module.css";
import { useState, useRef } from "react";

function Input() {
  const [inputVal, setInputVal] = useState("");
  const [inputList, setInputList] = useState([]);
  const [changeBtn, setChangeBtn] = useState(true);
  const [check, setCheck] = useState([]);
  const inputRef = useRef();
  const todoIdRef = useRef();

  function handleSubmit(inputVal) {
    setInputList((prev) => [...prev, inputVal]);
    setCheck((prev) => [...prev, false]);
    inputRef.current.focus();
  }

  function handleDelete(index) {
    let newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
    console.log(inputList);
  }

  function handleChangeBtn(id, todo) {
    todoIdRef.current = id;
    // inputRef.current.type.val = todo;
    setInputVal(todo);
    inputRef.current.focus();
    setChangeBtn(false);
  }
  function handleUpdate() {
    inputList[todoIdRef.current] = inputVal;
    setChangeBtn(true);
    setInputVal("");
  }

  function handleDone(box, index) {
    check[index] = !check[index];
    let box1 = document.querySelector("#" + box);
    if (check[index] === true) {
      box1.style.color = "gray";
      box1.style.textDecoration = "line-through";
    } else if (check[index] === false) {
      box1.style.textDecoration = "unset";
      box1.style.color = "rgb(205, 5, 211)";
    }
  }

  return (
    <div className="">
      <div className={classes.inputBox}>
        <input
          ref={inputRef}
          className={classes.inputVal}
          type="text"
          placeholder="type something...."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        {changeBtn === true ? (
          <i
            onClick={() => {
              handleSubmit(inputVal);
              setInputVal("");
            }}
            className={clsx("fa-solid", " fa-circle-plus", classes.check)}
          ></i>
        ) : (
          <i
            onClick={() => {
              handleUpdate();
            }}
            class={clsx("fa-solid fa-pen", classes.check)}
          ></i>
        )}
      </div>

      <ul className={classes.list}>
        {" "}
        Your List
        {inputList.map((box, index) => {
          return (
            <li id={box} key={index}>
              <input
                type="checkbox"
                // checked={checkedList[index]}
                // onChange={!checkedList[index]}
                onClick={() => {
                  handleDone(box, index);
                }}
              />
              <button
                className={classes.update}
                onClick={() => {
                  handleChangeBtn(index, box);
                }}
              >
                Update
              </button>
              <p>{box}</p>{" "}
              <i
                onClick={() => {
                  handleDelete(index);
                }}
                className="fa-solid fa-x"
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Input;
