import "./style.css";
import { motion } from "framer-motion";
export default function Input({
  label,
  placeholder,
  type,
  error,
  success,
  name,
  onChange,
  errorMessage,
  refs
}) {
  return label ? (
    <motion.div
      className={`${
        error
          ? "form-control error"
          : success
          ? "form-control success"
          : "form-control"
      } form-control`}
    >
      <label>{label}</label>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-main"
        ref={refs}
      />
      {success ? (
        <i className="fas successicon fa-check-circle"></i>
      ) : (
        error && <i className="fas fa-exclamation-circle"></i>
      )}
      <div className="error-msg">{error ? errorMessage : ""}</div>
    </motion.div>
  ) : (
    <motion.div className="form-controls">
      <input type={type} placeholder={placeholder} className="input-main" />
    </motion.div>
  );
}
