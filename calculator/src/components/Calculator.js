import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
    const [input, setInput] = useState("");


    const inputHandler = (event) => {
        let val = event.target.innerText
        setInput(prevInput => prevInput + val);
        console.log(val);
       
    }
    const clearInput = () => {
        setInput("");
    };

    const backspace = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };
    return (
        <>
          <div className="container">
            <div className="main">
            <Display  input={input}/>
             <Buttons
                inputHandler={inputHandler}
                clearInput={clearInput}
                backspace={backspace}
              />
            </div>
          </div>
        </>
      );
    }

export default Calculator;