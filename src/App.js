import React, { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { BrowserRouter, Route } from "react-router-dom";

import jwt from "jsonwebtoken";

import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";

const routes = [
  {
    path: "/",
    component: Dashboard,
    name: "home",
    private: true
  },
  {
    path: "/login",
    name: "masuk",
    component: Login
  }
];

export const UserContext = React.createContext();
export const TOKEN_KEY = "authToken";
export const ENDPOINT = "http://localhost:8000";

function App() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || "");

  function renderRoutes() {
    return routes.map(route =>
      route.private ? (
        <PrivateRoute
          path={route.path}
          exact
          component={route.component}
          key={route.name}
        />
      ) : (
        <Route
          path={route.path}
          exact
          component={route.component}
          key={route.name}
        />
      )
    );
  }

  function login(token) {
    localStorage.setItem(TOKEN_KEY, token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    window.location.href = "/login";
  }

  function isLoggedIn() {
    return token !== "";
  }

  function getAdmin() {
    return jwt.decode(token);
  }

  const providerValue = {
    token,
    setToken,
    getAdmin,
    isLoggedIn,
    login,
    logout
  };

  return (
    <UserContext.Provider value={providerValue}>
      <BrowserRouter>{renderRoutes()}</BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
