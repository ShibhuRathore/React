import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);

  // Password Generator Function
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged) str += "0123456789";
    if (charChanged) str += "-*&^%$#@!{}";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, charChanged, numberChanged]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="container">
        <h1>{password}</h1>
        <div className="second">
          
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <div>
            
            <input
              type="checkbox"
              id="char"
              checked={charChanged}
              onChange={(e) => setCharChanged(e.target.checked)}
            />
            <label htmlFor="char">Character</label>
          </div>

          <div>
           
            <input
              type="checkbox"
              id="num"
              checked={numberChanged}
              onChange={(e) => setNumberChanged(e.target.checked)}
            />
            <label htmlFor="num">Number</label>
          </div>
        </div>

        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);
