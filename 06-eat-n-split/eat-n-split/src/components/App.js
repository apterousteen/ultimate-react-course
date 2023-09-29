import { useEffect, useState } from 'react';
import FriendList from './FriendList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import FormAddFriend from './FormAddFriend';

const initialFriends = [
  {
    id: 118836,
    name: 'Rodion',
    balance: -156,
  },
  {
    id: 933372,
    name: 'May',
    balance: 0,
  },
  {
    id: 499476,
    name: 'Nastya',
    balance: 600,
  },
  {
    id: 499768,
    name: 'Ivan',
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(() => {
    const saved = localStorage.getItem('friendsList');
    return JSON.parse(saved) || initialFriends;
  });

  useEffect(() => {
    localStorage.setItem('friendsList', JSON.stringify(friendsList));
  }, [friendsList]);

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [formAddIsOpen, setFormAddIsOpen] = useState(false);

  const handleToggleFormAdd = () => {
    setFormAddIsOpen((isOpen) => !isOpen);
  };

  const handleToggleSelection = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
  };

  const handleAddFriend = (newFriend) => {
    setFriendsList((friends) => [...friends, newFriend]);
    setFormAddIsOpen(false);
    setSelectedFriend(newFriend);
  };

  const handleSplitBill = (newBalance) => {
    const newFriends = friendsList.map((f) =>
      f.id === selectedFriend.id ? { ...f, balance: f.balance + newBalance } : f
    );

    setFriendsList(newFriends);
    setSelectedFriend(null);
  };

  const handleDelete = (friend) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${friend.name}?`
    );

    if (confirmed) {
      setSelectedFriend(null);
      setFriendsList((friends) => friends.filter((f) => f.id !== friend.id));
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Eat & Split</h1>
      </header>
      <div className="sidebar">
        {friendsList.length > 0 && (
          <FriendList
            friends={friendsList}
            selectedFriend={selectedFriend}
            onToggleSelection={handleToggleSelection}
            onDelete={handleDelete}
          />
        )}

        {formAddIsOpen && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleToggleFormAdd}>
          {formAddIsOpen ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          friends={friendsList}
          onSetFriends={setFriendsList}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
