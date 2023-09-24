export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <img src="/icons-suitcase.png" alt="suitcase" />
        <span>Start adding items to your packing list ~</span>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <img src="/icons-suitcase.png" alt="suitcase" />
      <span>
        {percent === 100
          ? 'You got everything! Ready to go!'
          : `You have ${numItems} ${
              numItems > 1 ? 'items' : 'item'
            } and you've already packed ${numPacked} (${percent}%)`}
      </span>
    </footer>
  );
}
