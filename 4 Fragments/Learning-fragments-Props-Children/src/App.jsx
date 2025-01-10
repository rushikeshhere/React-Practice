import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  let [foodItem, setFoodItem] = useState(" ");

  let handleOnChangeTest = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}> List of Healthy Foods</h1>
        <FoodInput handleOnChangeEvent={handleOnChangeTest}></FoodInput>
        <ErrorMessage items={foodItems} />

        <FoodItems item={foodItems}></FoodItems>
      </Container>

      <Container>
        This is the app where we can fing props.children or direct children
      </Container>
    </>
  );
}

export default App;
