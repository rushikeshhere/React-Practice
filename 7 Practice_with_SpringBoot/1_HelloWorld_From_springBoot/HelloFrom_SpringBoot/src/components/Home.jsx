import { useEffect, useState } from "react";
import Hello_world from "./Hello_world";

const Home = () => {
  const [message, setMessage] = useState("");
  const [fetchMessage, setFetchMessage] = useState(false);

  useEffect(() => {
    if (fetchMessage) {
      fetch("http://localhost:8080/spring/hello_world")
        .then((res) => res.text())
        .then((data) => setMessage(data));
    }
  }, [fetchMessage]);

  const handleShowMessage = () => {
    setFetchMessage(true);
  };

  return (
    <div>
      <div className="heading">
        <h1>This is the React app which connected with Spring Boot!</h1>
      </div>
      <button onClick={handleShowMessage}>
        Click to get data from springBoot
      </button>
      <Hello_world message={message} />
    </div>
  );
};
export default Home;
