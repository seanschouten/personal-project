import React, {Component} from 'react';
import './App.css'
import routes from './routes'
import {Link, withRouter, Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {clearUser, updateUser} from './redux/reducers/authReducer'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background-color: #353C50;
  color: white;
  height: 100vh
`

const StyledHeader = styled.header`
  background-color: #767D91;
  border:100px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  height: 10vh
`
const StyledApp = styled.div`

`


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
    // if(this.props.user) {
    //   return <Redirect to='' />
    // }
    return (
        <StyledNav>
          <StyledHeader>
            <h4>Pride Pages</h4>
              <Link to='/about'>About</Link>
                {   !this.props.user ?      
                    <><Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link></> : 
                    <div>
                      Welcome, {this.props.user.toUpperCase()}
                      <button onClick={this.logout}>Logout</button>
                      <Link to='/account'>Account</Link>
                    </div>
                }
                
          </StyledHeader>
          {routes}
        </StyledNav>
      
    )

  };
}

let mapStateToProps = state => {
  return{
    user: state.authReducer.name
  }
}

export default withRouter(connect(mapStateToProps, {clearUser, updateUser})(App))