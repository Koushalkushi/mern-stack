import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import Categories from "./components/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />

        <Route exact path="/Categories" components={Categories} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
