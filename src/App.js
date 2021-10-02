import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/common/navbar";

import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Home from "./pages/home";

import "./App.css";

const App = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About us", path: "/about-us" },
  ];

  return (
    <BrowserRouter>
      <Navbar routes={routes} />
      <main>
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
