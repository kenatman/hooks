import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const begForLife = () =>
    console.log(`Dont leave!! you can get discount coupon!!`);
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
