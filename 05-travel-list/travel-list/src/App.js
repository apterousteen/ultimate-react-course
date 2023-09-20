import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  {
    id: 2,
    description: 'Socks',
    quantity: 12,
    packed: false,
  },
  { id: 3, description: 'Charger', quantity: 2, packed: true },
  {
    id: 4,
    description: 'Shirts',
    quantity: 2,
    packed: true,
  },
  { id: 5, description: 'Laptop', quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <img
        src="https://img.icons8.com/?size=256&id=yOF3vr5zrP4S&format=png"
        alt="floating-island-beach"
      />
      <h1>Far away</h1>
      <img
        src="https://img.icons8.com/?size=256&id=WwP9ajtrQdZj&format=png"
        alt="floating-island-beach"
      />
    </header>
  );
}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [placeholder, setPlaceholder] = useState('item name...');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setPlaceholder(`can't be empty!`);
      return;
    }

    console.log({
      id: 6,
      description,
      quantity,
      packed: false,
    });

    setDescription('');
    setQuantity(1);
    setPlaceholder('item name...');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        placeholder={placeholder}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span
        style={
          item.packed
            ? { textDecoration: 'line-through', color: '#ababab' }
            : null
        }
      >
        {item.quantity} {item.description}
      </span>
      <button>&times;</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <img src="/icons-suitcase.png" alt="suitcase" />
      <span>
        You have {} items and you've already packed {}({}%)
      </span>
    </footer>
  );
}
