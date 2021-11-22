import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact render={() => <div> Ini halaman home</div>} />
            <Route path='/news' render={() => <div>Ini halaman News</div>}/>          
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
