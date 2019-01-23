import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Route, Switch, Redirect, withRouter } from 'react-router'
import { checkingToken, settingAllUsers } from './redux/actions'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import EditAccount from './components/EditAccount'
import About from './components/About'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'
import UsersPage from './components/UsersPage'

class App extends Component {

  componentDidMount(){
    let token = localStorage.getItem('token')

    if(token){
      this.props.checkingToken(token)
    }
  }

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' render={ () => (
                this.props.currentUser ?
                <Home /> : <Redirect to='/login' />
              )} />
            <Route exact path='/login' render={ () => (
              this.props.currentUser ?
              <Redirect to="/" /> : <Login />
              )} />
            <Route exact path='/new' render={ () => (
                this.props.currentUser ?
                <Redirect to='/' /> : <CreateAccount />
              )} />
            <Route exact path='/edit' render={ () => (
                  this.props.currentUser ?
                  <EditAccount /> : <Redirect to='/login' />
                )} />
            <Route exact path='/about' render={ () => (
                <About />
              )} />
            <Route exact path='/users' render={ routerProps => (
                <UsersPage {...routerProps}/>
              )} />
              <Route path='/users/:username' render={ routerProps => (
                  <UserProfile {...routerProps}/>
                )} />
            <Route component={NotFound}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { checkingToken, settingAllUsers })(App));
