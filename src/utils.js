/**
 * This function checks if a given value is a valid string
 * @param {*} value The value need to be checked
 * @returns {boolean} Whether the given value is a valid string
 */
const isString = (value) => {
  return Object.prototype.toString.call(value) === "[object String]";
};

/**
 * This functions converts a csv string to a JSON
 * @param {string} string The csv string
 * @param {Array} headers Array of header names
 * @param {string} quoteChar The character representing quotes, default value is double quote
 * @param {string} delimiter The character representing delimiters, default value is comma
 * @returns {Object} Result JSON from csv string
 */
const csvToJson = (string, headers, quoteChar = '"', delimiter = ",") => {
  if (!isString(string)) throw new Error("Invalid csv format");
  const regex = new RegExp(
    `\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`,
    "gs"
  );
  const match = (string) =>
    [...string.matchAll(regex)]
      .map((match) => match[2])
      .filter((_, i, a) => i < a.length - 1); // cut off blank match at end

  const lines = string.split("\n");
  const heads = headers || match(lines.splice(0, 1)[0]);

  return lines.map((line) =>
    match(line).reduce(
      (acc, cur, i) => ({
        ...acc,
        [heads[i] || `extra_${i}`]: cur.length > 0 ? Number(cur) || cur : null,
      }),
      {}
    )
  );
};

const helpers = {
  isString,
  csvToJson,
};
export default helpers;
