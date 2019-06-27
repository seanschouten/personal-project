import React, {Component} from 'react';
import routes from './routes'
import {Link} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <div>
          <header>
            <div>Pride Pages</div>
              <Link to='/about'>About</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              <button onClick={this.logout}>Logout</button>
          </header>
          {routes}
        </div>
      
    )

  };
}