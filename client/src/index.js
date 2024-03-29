import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";

import reducer from "./reducers";
import App from "./App";

const root = createRoot(document.getElementById("root"));
const store = configureStore({ reducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
