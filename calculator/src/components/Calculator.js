import React, { useState, useEffect } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
    const [input, setInput] = useState("");
    
    const handleKeyDown = (event) => {
      const key = event.key;
      if (!isNaN(key) && key !== " ") {
          setInput(prevInput => prevInput + key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
          setInput(prevInput => prevInput + key);
      } else if (key === "Enter") {
          calculateAns();
      } else if (key === "Backspace") {
          backspace();
      }
  };
  useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
          document.removeEventListener("keydown", handleKeyDown);
      };
  }, [input]); 

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
        if (input == 'Error' || input == 'Undefined') {
          setInput("");
        } 
        setInput(prevInput => prevInput.slice(0, -1));
    };

    const calculateAns = () => {
        try {
            let result = evaluate(input);
            result = result === Infinity ? 'Undefined' : result;
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
