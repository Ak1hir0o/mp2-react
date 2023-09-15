import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import routes from "./routes";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
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
