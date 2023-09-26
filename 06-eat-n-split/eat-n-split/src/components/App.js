import { useState } from 'react';
import FriendList from './FriendList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import FormAddFriend from './FormAddFriend';

export default function App() {
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: 'Clark',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Anthony',
      balance: 0,
    },
  ]);

  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [formAddIsOpen, setFormAddIsOpen] = useState(false);

  const handleToggleFormSplit = (friendId) => {
    setSelectedFriendId(selectedFriendId === friendId ? null : friendId);
  };

  const handleToggleFormAdd = () => {
    setFormAddIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={initialFriends}
          selectedFriendId={selectedFriendId}
          onToggleForm={handleToggleFormSplit}
        />
        {formAddIsOpen && <FormAddFriend />}
        <Button onClick={handleToggleFormAdd}>
          {formAddIsOpen ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriendId && (
        <FormSplitBill
          selectedFriendId={selectedFriendId}
          friends={initialFriends}
        />
      )}
    </div>
  );
}
