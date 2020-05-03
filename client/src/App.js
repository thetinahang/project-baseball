//import React, { Component } from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
//import axios from "axios";//

//import Home from "./components/Home";
//import Dashboard from "./components/Dashboard";
//import KeyTermList from './containers/KeyTermList';
//import ProductsContainer from './containers/ProductsContainer';
//import Logout from './components/auth/Logout';//

//export default class App extends Component {
//  constructor() {
//    super();//

//    this.state = {
//      loggedInStatus: "NOT_LOGGED_IN",
//      user: {}
//    };//

//    this.handleLogin = this.handleLogin.bind(this);
//    this.handleLogout = this.handleLogout.bind(this);
//  }//

//  checkLoginStatus() {
//    axios
//      .get("http://localhost:3001/logged_in", { withCredentials: true })
//      .then(response => {
//        if (
//          response.data.logged_in &&
//          this.state.loggedInStatus === "NOT_LOGGED_IN"
//        ) {
//          this.setState({
//            loggedInStatus: "LOGGED_IN",
//            user: response.data.user
//          });
//        } else if (
//          !response.data.logged_in &
//          (this.state.loggedInStatus === "LOGGED_IN")
//        ) {
//          this.setState({
//            loggedInStatus: "NOT_LOGGED_IN",
//            user: {}
//          });
//        }
//      })
//      .catch(error => {
//        console.log("check login error", error);
//      });
//  }//

//  componentDidMount() {
//    this.checkLoginStatus();
//  }//

//  handleLogout() {
//    this.setState({
//      loggedInStatus: "NOT_LOGGED_IN",
//      user: {}
//    });
//  }//

//  handleLogin(data) {
//    this.setState({
//      loggedInStatus: "LOGGED_IN",
//      user: data.user
//    });
//  }//

//  render() {
//    return (
//      <div className="app">
//        <BrowserRouter>
//          <Switch>
//            <Route
//              exact
//              path={"/"}
//              render={props => (
//                <Home
//                  {...props}
//                  handleLogin={this.handleLogin}
//                  handleLogout={this.handleLogout}
//                  loggedInStatus={this.state.loggedInStatus}
//                />
//              )}
//            />
//            <Route
//              exact
//              path={"/dashboard"}
//              render={props => (
//                <Dashboard
//                  {...props}
//                  loggedInStatus={this.state.loggedInStatus}
//                  user={this.state.user}
//                />
//              )}
//            />
//            <Route exact path="/products" component={ProductsContainer} />
//            <Route exact path="/keyterms" component={KeyTermList} />
//            <Route exact path="/logout" component={Logout} />
//          </Switch>
//        </BrowserRouter>
//      </div>
//    );
//  }
//}

import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        // console.log(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3001/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
      default:
        return <SignInForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>
  );
}

export default App;