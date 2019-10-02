import React, { Component } from 'react'
import { PrivateRoute } from './components/PrivateRoute'
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Dashboard from './pages/Dashboard/index'

const routes = [
  {
    path: '/',
    component: Dashboard,
    name: "home",
    private: true
  },
  {
    path: '/login',
    name: "masuk",
    component: Login
  },
]

const context = React.createContext({
  isLoggedIn: () => false,
  token: "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  logout: () => {}
})

const { Provider, Consumer } = context

const TOKEN_KEY = "authToken";

class App extends Component {

  state = {
    token: "",
    user: null
  }

  renderRoutes = () => {
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
      ),
    )
  }

  setToken = (token) => {
    localStorage.setItem(TOKEN_KEY)
    this.setState({ token })
  }

  isLoggedIn = () => this.state.token !== ""

  setUser = (user) => {
    this.setState({ user })
  }

  render() {
    const providerValue = {
      token: this.state.token,
      setToken: this.setToken,
      user: this.state.user,
      setUser: this.setUser,
      isLoggedIn: this.isLoggedIn
    }
    return (
      <Provider value={providerValue}>
        <BrowserRouter>
          {this.renderRoutes()}
        </BrowserRouter>
      </Provider>
    )
  }
}

export { Consumer }
export default App

