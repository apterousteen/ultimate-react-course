import Button from './Button';
import { generateImg } from '../helpers';

export default function Friend({
  friend,
  onToggleSelection,
  selectedFriend,
  onDelete,
}) {
  const isSelected = selectedFriend?.id === friend.id;

  const generateBalanceMarkup = (balance, name) => {
    if (balance < 0)
      return (
        <p className="red">
          You owe {name} {-balance} ₽
        </p>
      );

    if (balance > 0)
      return (
        <p className="green">
          {name} owes you {balance} ₽
        </p>
      );

    return <p>You and {name} are even</p>;
  };

  return (
    <li className={isSelected ? 'selected' : ''}>
      <Button btnClass="btn-delete" onClick={() => onDelete(friend)}>
        &times;
      </Button>
      <img src={friend.img || generateImg(friend.name)} alt={friend.name} />
      <h3>{friend.name}</h3>
      {generateBalanceMarkup(friend.balance, friend.name)}
      <Button onClick={onToggleSelection}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
