import Button from './Button';
import { generateImg } from '../helpers';

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👫 Friend name</label>
      <input id="friend-name" type="text" />
      <label htmlFor="img-url">🌄 Image URL</label>
      <input
        id="img-url"
        type="text"
        value={generateImg(`Friend's name`)}
        onChange={() => null}
      />
      <Button>Add</Button>
    </form>
  );
}
