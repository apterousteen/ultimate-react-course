import Button from './Button';
import { generateImg } from '../helpers';

export default function Friend({ friend, onToggleForm, selectedFriendId }) {
  const generateBalanceMarkup = (balance, name) => {
    if (balance < 0)
      return (
        <p className="red">
          You owe {name} {-balance} €
        </p>
      );

    if (balance > 0)
      return (
        <p className="green">
          {name} owes you {balance} €
        </p>
      );

    return <p>You and {name} are even</p>;
  };

  return (
    <li className={selectedFriendId === friend.id ? 'selected' : ''}>
      <img src={generateImg(friend.name)} alt={friend.name} />
      <h3>{friend.name}</h3>
      {generateBalanceMarkup(friend.balance, friend.name)}
      <Button onClick={onToggleForm}>
        {selectedFriendId === friend.id ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
