import "./styles.css";
import { useState } from "react";
import FetchApi from "./FetchApi";
import Task from "./Task";

export default function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div className="App">
      <h1>{num}</h1>
      <button
        onClick={increment}
        style={{ color: "green", backgroundColor: "blue", margin: "10px" }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{ color: "red", backgroundColor: "blue", margin: "10px" }}
      >
        Decremnet
      </button>
      <FetchApi />
      <Task />
    </div>
  );
}
