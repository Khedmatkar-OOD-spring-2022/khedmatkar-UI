import React from "react";
import { Route, Routes } from "react-router-dom";
import { IconContext } from "react-icons";

import Home from "./home.js";
import AboutUs from "./about";
import SignUp from "./signup";
import Service from "./service.js";
import Dashboard from "./dashboard.js";

class App extends React.Component {
  
  render() {
    const apiUrl = process.env.NODE_ENV === 'production' ? 'khedmatkar' : "";
    return (
      <main>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", fill: "none" } }}
        >
          <Routes>
            <Route
              exact
              path={`${apiUrl}/`}
              element={<Home />}
            />
            <Route
              exact
              path={`${apiUrl}/aboutus`}
              element={<AboutUs />}
            />
            <Route
              path={`${apiUrl}/register`}
              element={<SignUp />}
            />
            <Route
              path={`${apiUrl}/service/make`}
              element={<Service />}
            />
            <Route
              path={`${apiUrl}/dashboard`}
              element={<Dashboard />}
            />
          </Routes>
        </IconContext.Provider>
      </main>
    );
  }
}

export default App;
