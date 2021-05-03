import React from "react";
import "./Loader.css";
import utils from "../utils";

/**
 * A custom loading indicator
 * @param {string} tip Tip message for loader
 * @returns <Loader tip={tip} />
 * @todo use Flow or prop-types to typecheck
 */
export default function Loader({ tip }) {
  return <p className="loading">{utils.isString(tip) ? tip : "Loading"}</p>;
}
