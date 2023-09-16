import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./UI/Navbarr";
import Footer from "./UI/Footer";
import routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbarr />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
