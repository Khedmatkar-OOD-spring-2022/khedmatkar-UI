// Layout Types
import { DefaultLayout, UserLayout, AdminLayout } from "../layouts";

// Route Views
import LoginForm from "../components/profile/Forms/LoginForm";
import ProfilePanel from "../components/profile/Panel/Panel";
import AboutUs from "./about";
import Dashboard from "./dashboard/dashboard.js";
import Home from "./home.js";
import Authenticate from "./authenticate";
import { User } from "iconsax-react";
import Admin from "./admin";
import ChatApp from "./chat";
import Search from "./search";

const routes = [
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
    path: "/profile",
    layout: UserLayout,
    component: ProfilePanel,
  },
  {
    path: "/search/:searchInput",
    layout: DefaultLayout,
    component: Search,
  },
  {
    path: "/dashboard",
    layout: UserLayout,
    component: Dashboard,
  },
  {
    path: "/dashboard/:section",
    layout: UserLayout,
    component: Dashboard,
  },
  {
    path: "/chat/:id",
    layout: UserLayout,
    component: ChatApp,
  },
  {
    path: "/admin",
    layout: AdminLayout,
    component: Admin,
  },
  {
    path: "/admin/:section",
    layout: AdminLayout,
    component: Admin,
  },
  {
    path: "/auth/:section",
    layout: DefaultLayout,
    component: Authenticate,
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: LoginForm,
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Home,
  },
];
export default routes;
