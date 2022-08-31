import React, {Component, useState} from "react";
import "./../styles/App.css";
import { Button } from "./Button"

function App() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  } 

  return (
    <div id="main">
      // Do not alter the main div
      <Button onToggle={handleClick} />
      {isShow && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}

    </div>
  );
}


export default App;
