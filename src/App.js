import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";

const App = () => {
  const potato = useRef();
  setTimeout(() => potato?.current?.focus(), 2000);
  return (
    <div>
      <span>Hi</span>
      <input ref={potato} placeholder="Write sth..." />
    </div>
  );
};

export default App;
