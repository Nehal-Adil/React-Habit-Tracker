import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./redux/Store";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// here we are rendering our main app component

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
