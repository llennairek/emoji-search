import React, { useState } from "react";

function Line({ symbol, title }) {
  const [copy, setCopy] = useState(false);
  return (
    <>
      <div
        className="line"
        onMouseOver={() => {
          setCopy(true);
        }}
        onMouseLeave={() => {
          setCopy(false);
        }}
        onClick={() => {
          navigator.clipboard.writeText(symbol);
        }}
      >
        <span>
          {symbol} {title}
        </span>
        {copy ? <span className="copy">Click to Copy the emoji !</span> : null}
      </div>
    </>
  );
}

export default Line;
