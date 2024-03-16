import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loader from "./components/common/Loader";
import "./scss/index.scss"
import AppRouter from "./routing/AppRouter";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Loader />
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);