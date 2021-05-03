import React from "react";
import "./ToggleSwitch.css";
import utils from "../utils";

/**
 * Custom toggle switch component
 * @param {function} callback function to be executed when switch is toggled
 * @param {string} text label text next to the switch
 * @returns <ToggleSwitch callback={callback} text={text} />
 */
export default function ToggleSwitch({ callback, text }) {
  const handleToggleChange = (e) => {
    callback(e.target.checked);
  };
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={(e) => handleToggleChange(e)} />
        <span className="slider"></span>
      </label>
      <span className="label-text">{utils.isString(text) ? text : null}</span>
    </>
  );
}
