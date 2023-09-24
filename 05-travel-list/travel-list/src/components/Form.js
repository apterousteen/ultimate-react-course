import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [placeholder, setPlaceholder] = useState('item name...');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setPlaceholder(`can't be empty!`);
      return;
    }

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

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
        type="text"
        placeholder={placeholder}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
