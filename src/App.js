import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
