import React from "react";
import { Route, Routes } from "react-router-dom";
import { IconContext } from "react-icons";

import Home from "./home.js";
import AboutUs from "./about";
import SignUp from "./signup";
import Service from "./service.js";
import Dashboard from "./dashboard.js";
import { React_Base_URL } from "../common/urls.js";

class App extends React.Component {
  render() {
    return (
      <main>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", fill: "none" } }}
        >
          <Routes>
            <Route exact path={`${React_Base_URL}/`} element={<Home />} />
            <Route
              exact
              path={`${React_Base_URL}/aboutus`}
              element={<AboutUs />}
            />
            <Route path={`${React_Base_URL}/register`} element={<SignUp />} />
            <Route
              path={`${React_Base_URL}/service/make`}
              element={<Service />}
            />
            <Route
              path={`${React_Base_URL}/dashboard`}
              element={<Dashboard />}
            />
          </Routes>
        </IconContext.Provider>
      </main>
    );
  }
}

export default App;
