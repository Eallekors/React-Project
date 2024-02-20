import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {

    return (
        <>
          <div className="container">
            <div className="main">
            <Display  />
             <Buttons
              />
            </div>
          </div>
        </>
      );
    }

export default Calculator;