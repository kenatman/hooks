import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";
import { useBeforeLeave } from "./useBeforeLeave";
import { useNetwork } from "./useNetwork";
import { useScroll } from "./useScroll";
import { useFullScreen } from "./useFullScreen";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "FULL" : "SMALL");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt="panda"
          src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />{" "}
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>

      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};

export default App;
