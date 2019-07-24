import React from "react";
import { Switch, Route } from "react-router-dom";

import confirm from "./Componenets";

const Main = () => {
  <Switch>
    <Route exact path="/" component={confirm} />
  </Switch>;
};

export default Main;
