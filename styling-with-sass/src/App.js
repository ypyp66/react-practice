import React from "react";
import Button from "./components/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" color="gray" onClick={()=>console.log("클릭!")}>
          Button
        </Button>
        <Button>Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          Button
        </Button>
        <Button>Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray" outline>
          Button
        </Button>
        <Button outline>Button</Button>
        <Button size="small" color="pink" outline>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray" fullWidth>
          Button
        </Button>
        <Button fullWidth>Button</Button>
        <Button size="small" color="pink" fullWidth onClick={()=>console.log("클릭!")}> 
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
