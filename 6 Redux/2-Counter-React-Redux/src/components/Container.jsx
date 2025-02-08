const Container = ({ children }) => {
  return (
    <center className="card cardContiner" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </center>
  );
};
export default Container;
