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

  const reset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <>
      <div>
        <span style={{ marginRight: '0.5rem' }}>Step: {step}</span>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
      </div>

      <div>
        <span style={{ marginRight: '0.5rem' }}>Count:</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          value={count}
          onChange={(e) =>
            Number.isFinite(+e.target.value) ? setCount(+e.target.value) : null
          }
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        {getDayString()}
        {date.toDateString()}
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={reset}>RESET</button>
      ) : null}
    </>
  );
  // Old version

  // return (
  //   <>
  //     <div>
  //       <button onClick={() => (step > 1 ? setStep((s) => s - 1) : null)}>
  //         -
  //       </button>
  //       <span>Step: {step}</span>
  //       <button onClick={() => setStep((s) => s + 1)}>+</button>
  //     </div>
  //     <div>
  //       <button onClick={() => setCount((c) => c - step)}>-</button>
  //       <span>Count: {count}</span>
  //       <button onClick={() => setCount((c) => c + step)}>+</button>
  //     </div>
  //     <p>
  //       {getDayString()}
  //       {date.toDateString()}
  //     </p>
  //   </>
  // );
}
