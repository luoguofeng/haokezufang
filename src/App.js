import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Login from "./views/login"
import Layout from "./views/layout"
import NotFound from "./views/notFound"
import "./App.css"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/layout" component={Layout}></Route>
        <Redirect exact from="/" to="/login"></Redirect>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
