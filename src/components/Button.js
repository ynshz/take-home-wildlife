import React from "react";
import utils from "../utils";
import "./Button.css";

/**
 * Custom Button Component
 * @param {string} text the text displayed on the button
 * @param {function} onClick function to be excuted on click event
 * @returns <Button text={text} onClick={onClick} />
 */
export default function Button({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {utils.isString(text) ? text : null}
    </button>
  );
}
