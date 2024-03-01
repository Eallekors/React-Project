import React from "react";
import "./Display.css";


const Display = ({ input, setInput, answer }) => {
    const formatInput = (input) => {
      return input.replace(/\//g, '÷').replace(/\*/g, 'x');
  };
  
  return (
        <>
          <div className="display">
            <input  type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={formatInput(input)}
              placeholder="0"
              maxLength={12}
              autoComplete="off"
              />
          </div>
        </>
      );
    };

export default Display;