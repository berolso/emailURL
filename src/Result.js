import React from "react";

function Result({result}) {

  return (
    <form id='result'>
      {/* <label htmlFor="result">Result:</label>
      <input name="result" value={result} /> */}
      <a href={result}>{result}</a>
    </form>
  );
}

export default Result;
