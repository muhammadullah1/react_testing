import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
 import Component from "./components/callAPIForTimezoen";

const AppRoutes = [
  {
    path: "/",
    element: Component,
  }
];

function App() {
  const routeComponents = useMemo(
    () =>
      AppRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      )),
    []
  );

  return (
    <Router>
      <Routes>{routeComponents}</Routes>
    </Router>
  );
}

export default App;
