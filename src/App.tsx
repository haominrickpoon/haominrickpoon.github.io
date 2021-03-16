import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/devblog">
          <BlogPage />
        </Route>
        <Route path="/about"></Route>
      </Switch>
    </Router>
  );
}

export default App;
