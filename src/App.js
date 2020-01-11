import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'
import Admin from './components/Admin'

export default class App extends Component {
  render(){
    return(
      <Router>
        <Route exact path='/' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/admin' component={Admin}  />
      </Router>
    )
  }
}
