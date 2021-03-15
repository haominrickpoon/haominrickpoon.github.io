import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/devblog"></Route>
        <Route path="/about"></Route>
      </Switch>
    </Router>
  );
}

export default App;
