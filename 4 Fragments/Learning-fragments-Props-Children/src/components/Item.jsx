import styles from "./Item.module.css";
const Item = ({ item }) => {
  const handleClickEvent = (event) => {
    //console.log(event);
    console.log(`${item} has been bought`);
  };

  return (
    <li className="list-group-item">
      {item}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleClickEvent()}
      >
        Add
      </button>
    </li>
  );
};
export default Item;
