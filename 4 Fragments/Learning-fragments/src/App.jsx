import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Milk", "Rice", "Paneer", "Biryani"];
  //let foodItems = [];

  return (
    <>
      <h1 style={{ textAlign: "center" }}> List of Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems item={foodItems}></FoodItems>
    </>
  );
}

export default App;
