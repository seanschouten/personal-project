import React, {Component} from 'react';
import routes from './routes'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {clearUser} from './redux/reducers/authReducer'

class App extends Component {

  logout = () => {
    axios.post('auth/logout').then(res => {
       this.props.clearUser()
       this.props.history.push('/cities')
    })
};

  render() {
    console.log(this.props)
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

export default withRouter(connect(null, {clearUser})(App))