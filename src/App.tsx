import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/:id' component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
