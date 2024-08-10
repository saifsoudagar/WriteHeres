import React, { useState } from "react";

export default function Textform(props) {
  const upperC = () => {
    // console.log("uppercase is clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to upper class ", "primary");
  };
  const lowerC = () => {
    // console.log("uppercase is clicked" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converted to lower class ", "primary");
  };
  const clearC = () => {
    // console.log("uppercase is clicked" + text);
    let newtext = "";
    settext(newtext);
    props.showAlert("cleared all ", "danger");
  };

  const handclick = (event) => {
    // console.log("clicked");
    settext(event.target.value);
  };

  const [text, settext] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="md-4"> {props.heading} </h1>{" "}
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            id="myBox"
            rows="8"
            onChange={handclick}
            style={{
              backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {" "}
          </textarea>{" "}
        </div>{" "}
        <button
          className="btn btn-primary mx-1  my-1"
          disabled={text.length === 0}
          onClick={upperC}
        >
          {" "}
          convert to uppercase{" "}
        </button>{" "}
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={lowerC}
        >
          {" "}
          convert to lowercase{" "}
        </button>{" "}
        <button
          className="btn btn-warning mx-1 my-1"
          disabled={text.length === 0}
          onClick={clearC}
        >
          {" "}
          Clear all{" "}
        </button>{" "}
      </div>{" "}
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Your text summary </h2>{" "}
        <p>
          {" "}
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length}
          characters{" "}
        </p>{" "}
        <p>
          {" "}
          {0.8 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes will be required to read all{" "}
        </p>{" "}
        <h2> Preview </h2>{" "}
        <p> {text.length > 0 ? text : "nothing to Preview here!"} </p>{" "}
      </div>{" "}
    </>
  );
}
