import Friend from './Friend';

export default function FriendList({
  friends,
  selectedFriendId,
  onToggleForm,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriendId={selectedFriendId}
          onToggleForm={() => onToggleForm(friend.id)}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
