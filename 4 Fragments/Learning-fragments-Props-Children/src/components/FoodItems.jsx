import Item from "./Item";
const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((items) => (
        <Item item={items} />
      ))}
    </ul>
  );
};
export default FoodItems;
