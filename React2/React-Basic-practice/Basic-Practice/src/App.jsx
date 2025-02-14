import "./App.css";
import Eight from "./components/Eight";
import Eleven from "./components/Eleven";
import Fifteen from "./components/Fifteen";
import Five from "./components/Five";
import Four from "./components/Four";
import Fourteen from "./components/Fourteen";
import Nine from "./components/Nine";
import { One } from "./components/One";
import Seven from "./components/Seven";
import Six from "./components/Six";
import Ten from "./components/Ten";
import Three from "./components/Three";
import Thrteen from "./components/Thrteen";
import Twelve from "./components/Twelve";
import Two from "./components/Two";

function App() {
  const itemsList = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "New Item1",
    "New Item2",
    "New Item3",
    "New Item4",
  ];
  return (
    <>
      {/* <One></One> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Four /> */}
      {/* <Five /> */}
      {/* {<Six />} */}
      {/* <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten /> */}
      {/* <Eleven /> */}
      {/* <Twelve /> */}
      {/* <Thrteen /> */}
      {/* <Fourteen /> */}
      <Fifteen items={itemsList} />
    </>
  );
}

export default App;
