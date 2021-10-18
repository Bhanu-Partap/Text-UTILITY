import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    let newText = document.getElementById("text-area");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const onChangeHandle = (event) => {
    console.log("Handler clicked");
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="text-area"
          rows="8"
          value={text}
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>
        Change to Uppercase
      </button>

      <button className="btn btn-primary mx-2" onClick={lowerCase}>
        Change to Lowercase
      </button>

      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear all text
      </button>

      <button className="btn btn-primary my-2" onClick={copyText}>
        Copy all text
      </button>
      <hr />
      <div className="container">
        <h1>Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charachters
        </p>
        <p>{0.007407 * text.split(" ").length} Minutes took to read</p>
      </div>
      <hr />
      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
