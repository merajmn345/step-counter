import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter
        step={step}
        count={count}
        setStep={setStep}
        setCount={setCount}
      />
    </div>
  );
}

function Counter({ step, count, setStep, setCount }) {
  function incrementCount() {
    setCount(count + step);
  }
  function decrementCount() {
    setCount(count - step);
  }

  function incrementStep() {
    setStep(step + 5);
  }
  function decrementStep() {
    setStep(step - 5);
  }

  const date = new Date("22 march 2026");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => decrementStep()}>-</button>
        <span>step : {step} </span>
        <button onClick={() => incrementStep()}>+</button>
      </div>

      <div>
        <button onClick={() => decrementCount()}>-</button>
        <span>count : {count} </span>
        <button onClick={() => incrementCount()}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : ""}{" "}
        </span>{" "}
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
