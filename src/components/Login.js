import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from './../redux/reducers/authReducer'

class Login extends Component {
    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        };
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(){
        const {email, password} = this.state

        axios
            .post('/auth/login', {email, password})
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/cities');
            // }).catch()
    })

        this.setState({
            email:'',
            password:''
        })
    }

    render() {
        if(this.props.id) {
            return <Redirect to = '/' />
        }
        return(
            <div>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Email'
                name='email'
                onChange={this.handleInput} 
                value={this.state.email}
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={this.handleInput}
                value={this.state.password}
            />
            <button onClick={() => this.login()}>Login</button>
            </div>
        )
    }
}

export default connect(state => state, {updateUser})(Login)