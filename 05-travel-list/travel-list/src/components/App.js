import { useEffect, useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('listItems');
    return JSON.parse(savedItems) || [];
  });

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((i) => (i.id !== id ? i : { ...i, packed: !i.packed }))
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
