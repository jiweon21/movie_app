import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path={About} component={About} />
    </HashRouter>
  );
}
export default App;
