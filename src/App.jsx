import { useState } from "react";
import "./App.css";
// import "./Components/button/button.jsx";
// import Button from "./Components/button";
import Button from "./Components/button/button";

const App = () => {
  const [counter, changeBtn] = useState(0);

  const decrement = () => {
    changeBtn(counter - 1);
  };
  const increment = () => {
    changeBtn(counter + 1);
  };

  let colorChange = "#fff";

  if (counter > 0) {
    colorChange = "positive";
  }
  if (counter < 0) {
    colorChange = "negative";
  }

  return (
    <div className="App">
      <Button click={decrement}>decrement</Button>
      <p className={`counter ${colorChange}`}>
        {counter > 0 ? counter : Math.abs(counter)}
      </p>
      <Button click={increment}>increment</Button>
    </div>
  );
};

export default App;
