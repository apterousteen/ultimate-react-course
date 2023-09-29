import Button from './Button';
import { generateImg } from '../helpers';
import { useState } from 'react';

export default function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState('');
  const [friendImg, setFriendImg] = useState(generateImg(friendName));
  const [placeholder, setPlaceholder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!friendName) {
      setPlaceholder(`can't be empty!`);
      return;
    }

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      img: friendImg,
      balance: 0,
    };

    onAddFriend(newFriend);

    setFriendImg(generateImg(friendName));
    setFriendName('');
    setPlaceholder('');
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👫 Friend name</label>
      <input
        id="friend-name"
        type="text"
        value={friendName}
        placeholder={placeholder}
        onChange={(e) => {
          setFriendName(e.target.value);
          setFriendImg(generateImg(e.target.value));
        }}
      />

      <label htmlFor="img-url">🌄 Image URL</label>
      <input
        id="img-url"
        type="text"
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
