import "./style.css";
const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container_data">{children}</div>
      {/* <h1>This is data</h1> */}
    </div>
  );
};

export default Container;
