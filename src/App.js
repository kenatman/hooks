import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";

const App = () => {
  const sayHello = () => {
    console.log(`hello`);
  };
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
