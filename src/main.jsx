import React from "react";
import ReactDOM from "react-dom/client";
import CallbackLearn from "./CallbackLearn";
import PromiseLearn from "./PromiseLearn";
import PromiseAllLearn from "./PromiseAllLearn";
import AsyncAwaitLearn from "./AsyncAwaitLearn";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CallbackLearn /> */}
    {/* <PromiseLearn /> */}
    {/* <PromiseAllLearn /> */}
    <AsyncAwaitLearn />
  </React.StrictMode>
);
