import { useRef, useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [operation, setOperation] = useState("");
  const sign = useRef("");

  const writeText = (e) => {
    const text = e.target.innerText;
    setOperation((prev) => prev + text);

    if (text === "+") {
      sign.current = "+";
    } else if (text === "-") {
      sign.current = "-";
    } else if (text === "*") {
      sign.current = "*";
    } else if (text === "/") {
      sign.current = "/";
    }
  };

  const deleteText = () => {
    setOperation((prev) => prev.slice(0, -1));
  };

  const resetCalc = () => {
    setOperation("");
  };

  const calcOperation = () => {
    console.log(operation);
    console.log(sign.current);
    const signIndex = operation.indexOf(sign.current);
    const firstNumber = operation.slice(0, signIndex);
    const secondNumber = operation.slice(signIndex + 1);

    if (sign.current === "+") {
      setOperation(+firstNumber + +secondNumber);
    } else if (sign.current === "-") {
      setOperation(+firstNumber - +secondNumber);
    } else if (sign.current === "*") {
      setOperation(+firstNumber * +secondNumber);
    } else if (sign.current === "/") {
      setOperation(+firstNumber / +secondNumber);
    }
  };

  return (
    <div className="calculator-grid-container">
      <div className="calculator-header calculator-span-4">
        {operation ? operation : 0}
      </div>

      <div
        className="calculator-grid-item calculator-span-2"
        onClick={resetCalc}
      >
        AC
      </div>
      <div className="calculator-grid-item" onClick={deleteText}>
        DEL
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        /
      </div>

      <div className="calculator-grid-item" onClick={writeText}>
        7
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        8
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        9
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        *
      </div>

      <div className="calculator-grid-item" onClick={writeText}>
        4
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        5
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        6
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        -
      </div>

      <div className="calculator-grid-item" onClick={writeText}>
        1
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        2
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        3
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        +
      </div>

      <div className="calculator-grid-item" onClick={writeText}>
        .
      </div>
      <div className="calculator-grid-item" onClick={writeText}>
        0
      </div>
      <div
        className="calculator-grid-item calculator-span-2"
        onClick={calcOperation}
      >
        =
      </div>
    </div>
  );
};

export default Calculator;
