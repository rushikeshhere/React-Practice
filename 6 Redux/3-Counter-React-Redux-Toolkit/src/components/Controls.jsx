import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary  px-4 gap-3"
        onClick={handleIncrement}
      >
        Increment : +1
      </button>
      <button
        type="button"
        className="btn btn-success px-4 gap-3"
        onClick={() => dispatch(counterActions.decrement())}
      >
        Decrement : -1
      </button>
      <button
        type="button"
        className="btn btn-danger px-4 gap-3"
        onClick={() => dispatch(counterActions.reset())}
      >
        Reset : 0
      </button>
    </div>
  );
};
export default Controls;
