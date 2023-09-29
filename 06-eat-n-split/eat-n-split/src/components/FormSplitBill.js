import Button from './Button';
import { useState } from 'react';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [userExp, setUserExp] = useState(0);
  const [payer, setPayer] = useState('user');

  const friendExp = bill - userExp;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || bill < userExp) return;

    const newBalance = payer === 'user' ? friendExp : -userExp;

    onSplitBill(newBalance);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">
        💰 Bill value{' '}
        {bill < userExp && <span className="error-msg">(must be greater)</span>}
      </label>
      <input
        id="bill"
        type="number"
        min="0"
        value={bill || ''}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label htmlFor="user-exp">🧍 Your expense</label>
      <input
        id="user-exp"
        type="number"
        min="0"
        value={userExp || ''}
        onChange={(e) => setUserExp(+e.target.value)}
      />

      <label htmlFor="other-exp">👫 {selectedFriend.name}'s expense</label>
      <input
        id="other-exp"
        type="number"
        disabled
        value={friendExp || ''}
        onChange={(e) => setUserExp(+e.target.value)}
      />

      <label htmlFor="payer">💸 Who is paying the bill</label>
      <select
        id="payer"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
