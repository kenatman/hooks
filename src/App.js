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
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNotif = useNotification(`Can I get Kimchi?`, {
    body: `Kimchi is healthy!!`,
  });
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
