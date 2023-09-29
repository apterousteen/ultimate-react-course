export default function Button({ onClick, btnClass = '', children }) {
  return (
    <button className={`button ${btnClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
