export default function Button({ children, isFull, ...rest }) {
  return (
    <button
      {...rest}
      className={`btn loading-btn inherit-font ${isFull && "full-width"}`}
    >
      {children}
    </button>
  );
}
