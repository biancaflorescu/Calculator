import { useRef, useState } from "react";
import usePrevious from "../../customHooks/usePrevious";
import "./calculator.css";

const Calculator = () => {
  const [operation, setOperation] = useState("");
  const [sign, setSign] = useState("");
  const counter = useRef(0);
  const pointCounter = useRef(0);

  const writeText = (e) => {
    let text = e.target.innerText;

    if (text === "+" || text === "-" || text === "*" || text === "/") {
      setSign(text);
      counter.current += 1;
      pointCounter.current = 0;
    }

    if (text === ".") {
      pointCounter.current += 1;
    }

    if (text === "." && pointCounter.current > 1) {
      text = "";
    }

    setOperation((prev) => prev + text);

    if (counter.current === 2) {
      calcOperation();
      setOperation((prev) => prev + text);
      counter.current = 1;
    }
  };

  const prevSign = usePrevious(sign);

  const deleteText = () => {
    if (counter.current !== 1) {
      setOperation((prev) => prev.slice(0, -1));
    }
  };

  const resetCalc = () => {
    setOperation("");
    setSign("");
    counter.current = 0;
    pointCounter.current = 0;
  };

  const calcOperation = () => {
    let signIndex = 0;

    counter.current = 1;

    for (let i = 0; i < operation.length; i++) {
      if (isNaN(Number(operation[i])) && operation[i] !== ".") {
        signIndex = operation.indexOf(operation[i]);
      }
    }

    console.log(counter);
    console.log(operation);
    console.log(prevSign);

    const firstNumber = operation.slice(0, signIndex);
    const secondNumber = operation.slice(signIndex + 1);

    console.log(signIndex, firstNumber, secondNumber);

    if (prevSign === "+") {
      setOperation(+firstNumber + +secondNumber);
    } else if (prevSign === "-") {
      setOperation(+firstNumber - +secondNumber);
    } else if (prevSign === "*") {
      setOperation(+firstNumber * +secondNumber);
    } else if (prevSign === "/") {
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
