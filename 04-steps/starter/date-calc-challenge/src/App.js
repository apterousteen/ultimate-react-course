import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  let date = new Date();
  date.setDate(date.getDate() + count);

  const getDayString = () => {
    if (count === 0) return 'Today is ';
    else if (count > 0)
      return `${count} ${count === 1 ? 'day' : 'days'} from today is `;
    else if (count < 0)
      return `${-count} ${count === 1 ? 'day' : 'days'} ago was `;
  };

  return (
    <>
      <div>
        <button onClick={() => (step > 1 ? setStep((s) => s - 1) : null)}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {getDayString()}
        {date.toDateString()}
      </p>
    </>
  );
}
