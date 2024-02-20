import React from "react";
import "./Display.css";


const Display = ({ input, setInput, answer }) => {
    return (
        <>
          <div className="display">
            <input  type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={12}
              disabled/>
          </div>
        </>
      );
    };

export default Display;