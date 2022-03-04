import "./style.css";
export default function Button({ children, isFull, isTrue, isError, ...rest }) {
  return (
    <button
      {...rest}
      className={`btn loading-btn inherit-font ${isFull && "full-width"}  ${
        isTrue && "btn-green"
      }  ${!isTrue && isError && "btn-primary"}`}
    >
      {children}
    </button>
  );
}
