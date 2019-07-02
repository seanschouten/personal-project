import React, {Component} from 'react';
import routes from './routes'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {clearUser, updateUser} from './redux/reducers/authReducer'

class App extends Component {
componentDidMount() {
  axios.get('/auth/currentUser').then((user) => {
    this.props.updateUser(user.data)
  })
};


  



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
                {   !this.props.user ?      
                    <><Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link></> : 
                    <div>
                      Welcome, {this.props.user.toUpperCase()}
                      <button onClick={this.logout}>Logout</button>
                    </div>
                }
                <Link to='/account'>Account</Link>
          </header>
          {routes}
        </div>
      
    )

  };
}

let mapStateToProps = state => {
  return{
    user: state.authReducer.name
  }
}

export default withRouter(connect(mapStateToProps, {clearUser, updateUser})(App))