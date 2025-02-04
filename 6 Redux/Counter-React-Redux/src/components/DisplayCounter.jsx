import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  const isAction = useSelector((store) => store.lastAction);

  const getBackgroundColor = () => {
    if (isAction === "INCREMENT") {
      return "bg-primary";
    } else if (isAction === "DECREMENT") {
      return "bg-success";
    } else if (isAction === "RESET") {
      return "bg-danger";
    }
  };

  return (
    <>
      <div>
        <p className="lead mb-4   fw-semibold">
          Counter Value :{" "}
          <span className={`badge bg-primary ${getBackgroundColor()}`}>
            {counter}
          </span>
        </p>
      </div>
    </>
  );
};
export default DisplayCounter;
