import React from "react";
import { Redirect, Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-moluecules/Loading";


const UserHome = Loadable({
  loader: () => import("../ui-pages/UserHome"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../ui-pages/Login"),
  loading: Loading
});


const MainRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/user-home" component={UserHome} />

    </div>
  );
};

export default MainRoutes;
