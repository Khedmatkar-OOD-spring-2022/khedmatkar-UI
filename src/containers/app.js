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
    return (
      <main>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", fill: "none" } }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/service/make" element={<Service />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </IconContext.Provider>
      </main>
    );
  }
}

export default App;
