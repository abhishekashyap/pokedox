import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const DetailsPage = React.lazy(() => import("./pages/Details/Details"));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path='/' component={HomePage} exact />
          <Route path='/:id' component={DetailsPage} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
