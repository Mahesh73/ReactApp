import React, { Component } from 'react'
import { HashRouter as Router, Route, NavLink, img } from 'react-router-dom'
import backGImage from "./b.jpg"
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside">
            <img src={backGImage} alt="my-pic" width="100%" height="100%"/>
          </div>
          <div className="App__Form">

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;