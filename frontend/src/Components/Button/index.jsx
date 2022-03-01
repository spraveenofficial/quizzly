export default function Button({ children, isFull, ...rest }) {
  return (
    <button
      {...rest}
      className={`btn inherit-font ${isFull && "full-width"}`}
    >
      {children}
    </button>
  );
}
