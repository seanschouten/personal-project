import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../redux/reducers/authReducer'


class Register extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = (e) => {
        e.preventDefault()
        const {name, email, password} = this.state

        axios
            .post('/auth/register', {name, email, password})
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/cities')
            })
            .catch(error => {
                alert('Existing user. Please log in!')
            })
    }

    render(){
        if(this.props.id) {
            return <Redirect to= '/' />
        }
        return(
            <div>
                <form>
                <h1>Register</h1>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={this.handleInput}
                    value={this.state.name}
                />
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
                <button onClick={this.register}>Register</button>
                </form>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         id: state.authReducer.id
//     }
// }


export default connect(state => state, {updateUser})(Register)