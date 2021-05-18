import "./App.css";
import React from "react";
import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange }; // return {value: value}
};

const App = () => {
  const name = useInput("Mr.");
  const email = useInput("@");
  return (
    <div>
      hello
      <input
        placeholder="Name"
        {...name}
        //  value={name.value} onChange={name.onChange}
      />
      <input placeholder="Name" {...email} />
    </div>
  );
};

export default App;
