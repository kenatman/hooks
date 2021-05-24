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

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? `we just went online` : `offline is!`);
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
};

export default App;
