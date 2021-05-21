import "./App.css";
import React, { useState, useEffect } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";

const App = () => {
  const titleUpdater = useTitle(`Loading...`);
  setTimeout(() => titleUpdater(`Home`), 2000);
  return (
    <div>
      <span>Hi</span>
    </div>
  );
};

export default App;
