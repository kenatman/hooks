import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useConfirm } from "./useConfirm";

const App = () => {
  const deleteWorld = () => {
    console.log("Delete The World");
  };
  const aborted = () => {
    console.log("Aborted");
  };
  const confirmDelete = useConfirm("are you sure", deleteWorld, aborted);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
