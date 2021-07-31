import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Styles/styles.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
