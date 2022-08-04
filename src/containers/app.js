import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

import { React_Base_URL } from "../common/urls.js";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <div className="font-link">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    );
  }
}

export default App;
