import Button from './Button';

export default function FormSplitBill({ selectedFriendId, friends }) {
  const [selectedFriend] = friends.filter((f) => f.id === selectedFriendId);

  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input id="bill" type="number" />

      <label htmlFor="your-ex">🧍 Your expense</label>
      <input id="your-ex" type="number" />

      <label htmlFor="other-ex">👫 {selectedFriend.name}'s expense</label>
      <input id="other-ex" type="number" disabled />

      <label htmlFor="payer">💸 Who is paying the bill</label>
      <select id="payer">
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
