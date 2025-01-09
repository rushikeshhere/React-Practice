import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChangeEvent }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the food item"
        className={styles.inputBox}
        onChange={handleOnChangeEvent}
      />
    </>
  );
};
export default FoodInput;
