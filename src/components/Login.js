import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './../redux/reducers/authReducer'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 50px;
    padding: 50px;
    /* background-color: blue; */
    align-items: center;
`
const InputBox = styled.input`
    margin-bottom: 10.75px;
    /* border-color: black; */
    width: 200px;    
`


class Login extends Component {
    constructor(){
        super();

        this.state = {
            email:'',
            password:'',
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
            return <h1>Welcome</h1> 
        }
        return(
        <StyledLogin>
            <h1>Login</h1>
            <InputBox
                type='text'
                placeholder='Email'
                name='email'
                onChange={this.handleInput} 
                value={this.state.email}
            />
            <InputBox
                type='password'
                placeholder='Password'
                name='password'
                onChange={this.handleInput}
                value={this.state.password}
            />
            <button onClick={() => this.login()}>Login</button>
            <Link to='/register'>Register Here</Link>
        </StyledLogin>
            
        )
    }
}

export default connect(state => state, {updateUser})(Login)