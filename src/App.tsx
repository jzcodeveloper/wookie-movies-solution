import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Details from "./containers/details";
import Header from "./components/header";

function App(): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={Details} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
