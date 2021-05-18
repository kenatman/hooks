import "./App.css";
import React from "react";
import { useInput } from "./useInput";

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      hello
      <input
        placeholder="Name"
        {...name}
        //  value={name.value} onChange={name.onChange}
      />
    </div>
  );
};

export default App;
