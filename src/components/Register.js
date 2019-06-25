import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from './../redux/authReducer'


export default class Register extends Component {
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

    register() {
        const {name, email, password} = this.state

        axios
            .post('/auth/register', {name, email, password})
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/')
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
                <h1>Register</h1>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange=
                    value=

            </div>
        );
    }
}