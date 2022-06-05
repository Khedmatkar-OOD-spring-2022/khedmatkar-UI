import React from "react";
import { Route, Routes } from "react-router-dom";
import { IconContext } from "react-icons";

import Home from "./home.js";
import AboutUs from "./about";
import Login from "./login";

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
            <Route path="login" element={<Login />} />
          </Routes>
        </IconContext.Provider>
      </main>
    );
  }
}

export default App;
