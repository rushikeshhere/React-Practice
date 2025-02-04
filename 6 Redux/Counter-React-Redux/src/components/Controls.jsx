import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary  px-4 gap-3"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment : +1
      </button>
      <button
        type="button"
        className="btn btn-success px-4 gap-3"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement : -1
      </button>
      <button
        type="button"
        className="btn btn-danger px-4 gap-3"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset : 0
      </button>
    </div>
  );
};
export default Controls;
