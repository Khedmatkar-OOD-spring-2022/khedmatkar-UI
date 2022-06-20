import React from "react";

// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import Home from "./home.js";
import AboutUs from "./about";
import SignUp from "./signup";
import Dashboard from "./dashboard/dashboard.js";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },
  {
    path: "/aboutus",
    layout: DefaultLayout,
    component: AboutUs,
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: SignUp,
  },
];
