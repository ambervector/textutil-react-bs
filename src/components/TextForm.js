// import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  // let defaultText = "Enter your text here!";
  let [text, setText] = useState(props.preExistingText);

  const handleUpClick = (event) => {
    if (text === "") {
      alert("Please enter a text to convert it all to Uppercase!!!");
    }
    console.log(props.preExistingText);
    const newText = text.toUpperCase();
    setText(newText);

    // console.log("Uppercase button got clicked!");
  };

  const handleLowClick = (event) => {
    if (text === "") {
      alert("Please enter a text to convert it all to Lowercase!!!");
    }
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTaOnClick = (event) => {
    if (event.target.value === text) {
      setText("");
    }
  };

  const resetHandler = () => {
    setText(props.preExistingText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control "
          value={text}
          onChange={handleOnChange}
          onClick={handleTaOnClick}
          id="floatingTextarea"
          defaultValue={""}
        />
        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary my-4 mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-secondary mx-2" onClick={resetHandler}>
          Reset
        </button>
        {/* <label htmlFor="floatingTextarea">{props.preExistingText}</label> */}
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} - Minute Read!</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
