import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
    const [input, setInput] = useState("");


    const inputHandler = (event) => {
        let val = event.target.innerText
        val = val === 'x' ? '*' : val;
        val = val === '÷' ? '/' : val;
        if (input == 'Error') {
          setInput("");
        } 
        setInput(prevInput => prevInput + val);
        console.log(val);
       
    }
    const clearInput = () => {
        setInput("");
    };

    const backspace = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    const calculateAns = () => {
        try {
            const result = evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput("Error"); 
        }
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
                calculateAns={calculateAns}
              />
            </div>
          </div>
        </>
      );
    }

export default Calculator;