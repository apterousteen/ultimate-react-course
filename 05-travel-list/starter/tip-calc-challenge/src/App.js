import "./App.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tipPercent1, setTipPercent1] = useState(0);
  const [tipPercent2, setTipPercent2] = useState(0);

  const tip = bill * ((tipPercent1 + tipPercent2) / 2 / 100);

  const setBillValue = (e) => {
    if (Number.isFinite(+e.target.value)) setBill(+e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercent1(0);
    setTipPercent2(0);
  };

  return (
    <div className="App">
      <h1>Tip calculator</h1>
      <BillInput bill={bill} onSetBill={setBillValue} />
      <SelectTip
        tipPercent={tipPercent1}
        onSelect={setTipPercent1}
        question="How did you like the service?"
      />
      <SelectTip
        tipPercent={tipPercent2}
        onSelect={setTipPercent2}
        question="How did your friend like the service?"
      />
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <BtnReset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill === 0 ? null : bill}
        onChange={onSetBill}
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectTip({ question, tipPercent, onSelect }) {
  return (
    <div>
      <label>{question}</label>
      <select value={tipPercent} onChange={(e) => onSelect(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was OK (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <p className="total">
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}

function BtnReset({ onReset }) {
  return <button onClick={onReset}>RESET</button>;
}
