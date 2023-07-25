import React, { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [themeChangeCounter, setThemeChangeCounter] = useState(0);

  const calcNumber = useMemo(() => {
    return slowCalculation(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      color: dark ? "white" : "navy",
      backgroundColor: dark ? "navy" : "white",
    };
  }, [dark]);

  useEffect(() => {
    setThemeChangeCounter(
      (prevThemeChangeCounter) => prevThemeChangeCounter + 1
    );
  }, [themeStyle]);

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change the Theme
      </button>
      <h3 style={themeStyle}>{calcNumber}</h3>
      <h3>{themeChangeCounter}</h3>
    </div>
  );
}

export default App;

const slowCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    return num * 5;
  }
};
