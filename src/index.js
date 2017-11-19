import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import RouterApp from "./router";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
