import './App.css';
import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={el.title}
          text={el.text}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = curOpen === num;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <span className="title">{title}</span>
      <span className="icon">{isOpen ? '-' : '+'}</span>
      <div className={`content-box ${isOpen ? 'box-open' : ''}`}>
        {isOpen ? text : ''}
      </div>
    </div>
  );
}
