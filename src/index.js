import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./pages/counter/Counter";
import Jotto from "./pages/jotto";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './configureStore'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/jotto" component={Jotto} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
