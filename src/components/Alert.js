import React from "react";
import utils from "../utils";

/**
 * A custom Alert box
 * @param {string} message The message to display in the custom alert box
 * @returns The alert component
 * @todo use Flow or prop-types to typecheck
 */
export default function Alert({ message }) {
  return utils.isString(message) ? (
    <div className="alert">{message}</div>
  ) : null;
}
