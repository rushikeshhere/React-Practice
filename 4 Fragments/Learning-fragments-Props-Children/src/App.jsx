import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Roti", "Milk", "Rice", "Paneer", "Biryani"];
  //let foodItems = [];

  let [foodItem, setFoodItem] = useState(" ");
  let handleOnChangeTest = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    setFoodItem(value);
  };

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}> List of Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChangeEvent={handleOnChangeTest}></FoodInput>
        <p>{foodItem}</p>
        <FoodItems item={foodItems}></FoodItems>
      </Container>

      <Container>
        This is the app where we can fing props.children or direct children
      </Container>
    </>
  );
}

export default App;
