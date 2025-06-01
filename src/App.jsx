import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  const handleClickAgain = () => {
    alert("Button clicked again!");
  };
  const addToFive = (num) => {
    alert(num * 5);
  };
  return (
    <>
      <h1>React Core Concepts</h1>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickAgain}>Click Me Again</button>
      <button
        onClick={() => {
          alert("Button clicked once again!");
        }}
      >
        Button Clicked Once Again
      </button>
      <button onClick={() => addToFive(3)}>Another Button</button>
    </>
  );
}

export default App;
