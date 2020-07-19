import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ToDosProvider from "./newcontext";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);
