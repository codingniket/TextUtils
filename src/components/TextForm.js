import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("Button is clicked");
    setText(text.toUpperCase());
    props.showAlert("To Uppercase","success")
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    console.log("Button is clicked");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleTitleClick = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
  };
  const handleReverseClick = () => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  const [text, setText] = useState("");
  // text = "New state"; // Wrong way to change the state
  // setText ("New state"); // Wrong way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to UpperCase{" "}
        </button>
        <button className="btn btn-success my-2 mx-2" onClick={handleDownClick}>
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-danger my-2 mx-0" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-info my-2 mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button
          className="btn btn-warning my-2 mx-0"
          onClick={handleTitleClick}
        >
          Title Case
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          Words = {text.split(" ").length}, Character = {text.length}
        </p>
        <p>Time To Read = {0.008 * text.split(" ").length} in mintues</p>
      </div>
    </>
  );
};

export default TextForm;
