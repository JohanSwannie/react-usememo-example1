import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const calcNumber = slowCalculation(number);
  const themeStyle = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };
  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onClick={(event) => setNumber(parseInt(event.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change the Theme
      </button>
      <h3 style={themeStyle}>{calcNumber}</h3>
    </div>
  );
}

export default App;

const slowCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    return num * 5;
  }
};
