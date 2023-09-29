import Friend from './Friend';

export default function FriendList({
  friends,
  selectedFriend,
  onToggleSelection,
  onDelete,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          onToggleSelection={() => onToggleSelection(friend)}
          onDelete={onDelete}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
