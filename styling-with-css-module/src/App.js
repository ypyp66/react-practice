import React, { useState } from "react";
import CheckBox from "./components/CheckBox";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        {console.log("main", check)}
        <b>check: </b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
}

export default App;
