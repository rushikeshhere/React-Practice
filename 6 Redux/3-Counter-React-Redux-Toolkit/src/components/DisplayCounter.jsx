import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  const isAction = useSelector((state) => state.counter.lastAction);

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
            {counterVal}
          </span>
        </p>
      </div>
    </>
  );
};
export default DisplayCounter;
