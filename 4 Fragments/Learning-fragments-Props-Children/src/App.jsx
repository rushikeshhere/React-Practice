import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Dal", "Roti", "Milk", "Rice", "Paneer", "Biryani"];
  //let foodItems = [];

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}> List of Healthy Foods</h1>
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
