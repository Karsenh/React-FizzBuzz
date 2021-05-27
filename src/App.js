import "./styles.css";
import React, { useState } from "react";

import FizzBox from "./fizzBox";
import { toggleFizz } from "./helper";

export default function App() {
  const [fizzArr, setFizzArray] = useState([]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => toggleFizz(setFizzArray)}>
        Start Fizz Buzzing!
      </button>
      <FizzBox fizzArr={fizzArr} />
    </div>
  );
}
