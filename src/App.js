import "./App.css";
import React, { useState } from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";

const contents = [
  { tab: "section1", content: "Hello,I am section1." },
  { tab: "section2", content: "Hi,I am section2." },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div>
      {contents.map((content, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {content.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
