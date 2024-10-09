import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Product Engineer",
          "Full Stack Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
