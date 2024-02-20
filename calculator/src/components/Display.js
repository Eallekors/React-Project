import React from "react";
import "./Display.css";


const Display = ({ input, setInput, answer }) => {
    return (
        <>
          <div className="display">
            <input  type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              autoComplete="off"
              />
          </div>
        </>
      );
    };

export default Display;