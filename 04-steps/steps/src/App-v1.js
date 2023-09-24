import React, { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [btnText, setBtnText] = useState('×');

  const handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  const handleOpen = () => {
    setIsOpen((isO) => !isO);
    setBtnText((text) => (text === '≡' ? '×' : '≡'));
  };

  return (
    <>
      <button className="close" onClick={handleOpen}>
        {btnText}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : null}>1</div>
            <div className={step >= 2 ? 'active' : null}>2</div>
            <div className={step >= 3 ? 'active' : null}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button className="previous" onClick={handlePrevious}>
              Previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
