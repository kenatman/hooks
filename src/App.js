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
import useAxios from "./useAxios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: `https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating`,
  });
  console.log(loading, error, data);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
