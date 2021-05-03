import React from "react";
import constants from "../constants";
import ToggleSwitch from "./ToggleSwitch";
import "./ToolBar.css";
/**
 * Custom tool bar component
 * @param {function} toggleSlideView function to toggle the status of slide view
 * @returns <ToolBar toggleSlideView={toggleSlideView} />
 */
export default function ToolBar({ toggleSlideView }) {
  return (
    <div className="toolbar-container">
      <ToggleSwitch
        callback={toggleSlideView}
        text={constants.SLIDE_VIEW_NAME}
      />
    </div>
  );
}
