import React, {useState} from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
      <>
        <Steps/>
      </>
  );
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

              <StepMessage step={step}>{messages[step - 1]}</StepMessage>

              <div className="buttons">
                <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
                  <span>⬅</span> Previous
                </Button>

                <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                  Next <span>➡</span>
                </Button>
              </div>
            </div>
        )}
      </>
  );
}

function Button({bgColor, textColor, onClick, children}) {
  return (
      <button
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          onClick={onClick}
      >
        {children}
      </button>
  );
}

function StepMessage({step, children}) {
  return (
      <div className="message">
        <h3>Step {step}:</h3>
        {children}
      </div>
  );
}
