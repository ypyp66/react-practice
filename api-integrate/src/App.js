import React from "react";
import Users from "./Users";
import Users2 from "./Users2";
import Users3 from "./Users3";
import Users4 from "./Users4";
import Users5_1 from "./Users5_1";
import { UsersProvider } from "./UsersContext";

function App() {
  return (
    <>
      <UsersProvider>
        <Users5_1 />
      </UsersProvider>
    </>
  );
}

export default App;
