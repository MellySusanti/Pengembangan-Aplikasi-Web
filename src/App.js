import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'

//router dengan array

class App extends Component{
  constructor(){
    super()
    this.state = {
      isAuh : false
    }
  }
  render(){
    const LoginButton = withRouter(({history}) => (
      <button onClick={() => {
        this.setState({isAuth : true})
        history.push('/profile')
      }}>Login</button>
    ))

    const LogoutButton = withRouter(({history}) => (
      <button onClick={() => {
        this.setState({isAuth : false})
        history.push('/login')
      }}>Logout</button>
    ))

    const routes = [{
      path : '/',
      exact : true,
      render : ()=> <div>Ini Halaman Home</div>
    },{
      path : '/news',
      render : ()=> <div>Ini Halaman News</div>
    },{
      path : '/login',
      render : ()=> <LoginButton />
    },{
      path : '/profile',
      render : ()=> this.state.isAuth ? <div>Ini halaman Profile <br /><LogoutButton /></div> : <Redirect to ='/login' />
    }]
    return(
      <Router>
        <div>
        <ul style={{listStyle: 'none'}}>
             <li><NavLink exact activeStyle={{fontWeight:'bold', color:'red'}}to='/'>Home</NavLink></li>
             <li><NavLink activeClassName='active-link' to='/news'>News</NavLink></li>
             <li><NavLink activeClassName='active-link' to='/profile'>Profile</NavLink></li>
           </ul>
           <Switch>
           {
             routes.map((item, index) => (
               <Route path={item.path} exact={item.exact} render={item.render} />
             ))
           }
           </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
