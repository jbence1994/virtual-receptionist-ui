import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/common/navbar";

import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Home from "./pages/home";

import pages from "./config/app.skeleton";

import "./App.css";

const App = () => {
  const { HOME_PAGE, CONTACT_PAGE, ABOUT_US_PAGE } = pages;

  return (
    <BrowserRouter>
      <Navbar
        routes={[
          { name: HOME_PAGE.name, path: HOME_PAGE.path },
          { name: CONTACT_PAGE.name, path: CONTACT_PAGE.path },
          { name: ABOUT_US_PAGE.name, path: ABOUT_US_PAGE.path },
        ]}
      />
      <main>
        <Switch>
          <Route exact path={ABOUT_US_PAGE.path} component={AboutUs} />
          <Route exact path={CONTACT_PAGE.path} component={Contact} />
          <Route exact path={HOME_PAGE.path} component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
